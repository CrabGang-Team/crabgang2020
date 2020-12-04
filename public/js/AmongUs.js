let AmongUs = {}

AmongUs.dolphin = () => {
    window.alert(AmongUs.traduction.dolphin);
}

AmongUs.wires = () => {
    window.alert(AmongUs.traduction.wires);
}

AmongUs.nothinghere = () => {
    window.alert(AmongUs.traduction.nothing);
}

AmongUs.together = () => {
    window.alert(AmongUs.traduction.together);
}

AmongUs.runGame = () => {
    setTimeout(function () { location.href = "/fr/amongus" }, 4500);
}

AmongUs.changePage = () => {

    "use strict"
    // type 'among' on your keyboard
    let key = [65, 77, 79, 78, 71]
    let ck = 0
    let max = key.length
 
    let change = function () {
        setTimeout(function () { location.href = "/fr/test" }, 1);
    };

    let record = function (e) {
        if (e.which === key[ck]) {
            ck++
        } else {
            ck = 0
        }
        if (ck >= max) {
            change()
            ck = 0
        }
    }

    let init = function () {
        document.addEventListener('keyup', record)
    }

    init()
}

window.onload = AmongUs.changePage();