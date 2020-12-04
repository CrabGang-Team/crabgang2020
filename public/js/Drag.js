let Drag = {}

Drag.listLetters = ["L","R","U","D","A","B"];

Drag.code = "";
Drag.userCode = "";

$("#dolphin").position.left = 10;

$( "#dolphin" ).draggable({
  axis: "x",
  containment: "#draggablediv",
  cursor: "move",
  //helper: "clone", //Permet de cloner l'objet et de bouger seulement le clone
  drag: function( event, ui ) {
    $("#dolphin").tooltip('hide')
    if( (ui.position.left > (window.innerWidth-(1.5*document.getElementById("dolphin").offsetWidth))) && localStorage.getItem("leetSpeak-activated")==="false") {
      $('#modalLeet').modal('show');
      return false;
    }
    else if((ui.position.left < (1.5*document.getElementById("dolphin").offsetWidth)) && localStorage.getItem("leetSpeak-activated")==="true") {
      LeetSpeak.disactivate();
      return false;
    }
  }
});

Drag.setCode = () => {
  Drag.listLetters.sort(() => Math.random() - 0.5);
  Drag.code = Drag.listLetters.join("");
}

Drag.decode = () => {
  if(Drag.userCode == Drag.code) {
    $('#modalLeet').modal('hide');
    Drag.resetTipsKonami();
    Drag.resetCodeKonami();
    LeetSpeak.activate();
  }
}


Drag.showTipsKonami = (button) => {
  Drag.setCode();
  $("#tipsSpan").text(Drag.translation.tips+' '+Drag.code);
  $("#buttonShowTipsKonami").hide();
}

Drag.resetTipsKonami = () => {
  Drag.resetCodeKonami();
  $("#tipsSpan").text('');
  $("#buttonShowTipsKonami").show();
}

Drag.resetCodeKonami = () => {
  $("#codeSpan").text('');
  Drag.userCode = "";
}

Drag.clickKonamiArrow = (arrow) => {
  if(Drag.userCode == "")
  {
    $("#codeSpan").text('');
  }
  Drag.userCode += arrow;
  $("#codeSpan").text(Drag.userCode);
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})