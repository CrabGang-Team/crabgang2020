$( "#bullet" ).draggable({
  axis: "x",
  containment: "#draggablediv",
  cursor: "move",
  //helper: "clone", //Permet de cloner l'objet et de bouger seulement le clone
  drag: function( event, ui ) {
    console.log(ui.position.left);
  }
});

