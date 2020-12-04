let MakeCrewmateMove = {}

MakeCrewmateMove.move = () => {
$("#crewmate").show()
$("#gifHint2").animate({top:'87%'})
setTimeout(anim, 1500);
}
function anim() {
    $("#hint2").show();
    $("#crewmate").attr("src", "../images/cyan.png");
    $('#crewmate').width(0.1 * window.innerWidth);
    $('#crewmate').height(auto);
  }
