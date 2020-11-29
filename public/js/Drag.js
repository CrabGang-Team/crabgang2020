// Make the DIV element draggable:
dragElement(document.getElementById("draggablediv"));

function dragElement(elmnt) {
  var start = 0, end = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    end = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    var position = document.getElementById("draggablediv").getBoundingClientRect();
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    console.log(e.clientX);
    start = (position.left < 0) ? -1 : (end - e.clientX);
    end = e.clientX;
    // set the element's new position:
    elmnt.style.left = (elmnt.offsetLeft - start) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}