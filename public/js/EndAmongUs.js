let EndAmongUs = {}

EndAmongUs.Antoine = () => {
    document.getElementById('player').play();
    setTimeout(function () { $("#antoinedied").attr("src", "/images/Defeat.png"); }, 4500);
    setTimeout(function () { document.getElementById('player2').play(); }, 4500);
}

EndAmongUs.Alfred = () => {
    document.getElementById('player').play();
    setTimeout(function () { $("#alfreddied").attr("src", "/images/Defeat.png"); }, 4500);
    setTimeout(function () { document.getElementById('player2').play(); }, 4500);
}

EndAmongUs.Robin = () => {
    document.getElementById('player').play();
    setTimeout(function () { $("#robindied").attr("src", "/images/Victory.png"); }, 4500);
    setTimeout(function () { document.getElementById('player2').play(); }, 4500);
}

var element = document.getElementsByClassName("antoinedied");

if (typeof(element) != 'undefined' && element != null) {
    EndAmongUs.Antoine();
}

var element = document.getElementsByClassName("alfreddied");

if (typeof(element) != 'undefined' && element != null) {
    EndAmongUs.Alfred();
}

var element = document.getElementsByClassName("robindied");

if (typeof(element) != 'undefined' && element != null) {
    EndAmongUs.Robin();
}