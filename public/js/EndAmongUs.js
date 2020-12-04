let EndAmongUs = {}

EndAmongUs.Antoine = () => {
    document.getElementById('player').play();
    setTimeout(function () { $("#antoinedied").attr("src", "{{ asset('images/Deafeat.jpg') }}"); }, 4500);
    document.getElementById('player2').play();
}

EndAmongUs.Alfred = () => {
    document.getElementById('player').play();
    setTimeout(function () { $("#alfreddied").attr("src", "{{ asset('images/Deafeat.jpg') }}"); }, 4500);
    document.getElementById('player2').play();
}

EndAmongUs.Robin = () => {
    document.getElementById('player').play();
    setTimeout(function () { $("#robindied").attr("src", "{{ asset('images/Victory.png') }}"); }, 4500);
    document.getElementById('player2').play();
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