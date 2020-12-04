var check = true;

$( "#bullet" ).draggable({
  axis: "x",
  containment: "#draggablediv",
  //helper: "clone", //Permet de cloner l'objet et de bouger seulement le clone
  drag: function( event, ui ) {
    if(ui.position.left > (window.innerWidth-(1.5*document.getElementById("bullet").offsetWidth)) && check) {
        check = false;
        setTimeout(show, 7000);
        setTimeout(cancel, 9500);
    }
  }
});

function show() {
    $("#hint1").show();
  }

function cancel() {
    $("#hint1").hide();
  }

