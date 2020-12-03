$( "#bullet" ).draggable({
  axis: "x",
  containment: "#draggablediv",
  cursor: "move",
  //helper: "clone", //Permet de cloner l'objet et de bouger seulement le clone
  drag: function( event, ui ) {
    if(ui.position.left > 550 && localStorage.getItem("leetSpeak-activated")==="false") {
      LeetSpeak.toggle();
      $('#exampleModal').modal('show');
      localStorage.setItem("leetSpeak-activated", true);
      return false;
    }
    else if(ui.position.left < 450 && localStorage.getItem("leetSpeak-activated")==="true") {
      LeetSpeak.toggle();
      $('#exampleModal').modal('show');
      localStorage.setItem("leetSpeak-activated", false);
      return false;
    }
  }
});

