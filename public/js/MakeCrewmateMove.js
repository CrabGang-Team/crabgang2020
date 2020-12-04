let MakeCrewmateMove = {}

MakeCrewmateMove.move = () => {
$("#crewmate").show()
$("#gifHint2").animate({top:'87%'})
setTimeout(anim, 1000);
}
function anim() {
    $("#hint2").show();
    $("#crewmate").attr("src", "../images/dead bodies/cyan.png");
    $("#crewmate").attr("onclick", "document.getElementById('player').play(); MakeCrewmateMove.changeGame()");
    $("#crewmate").width(0.1 * window.innerWidth);
    $("#crewmate").height(auto);
  }

  MakeCrewmateMove.changeGame = () => {
    setTimeout(function () { location.href = "/NuitInfo2020/public/fr/amongUs/emergency" }, 4000);
}