let Inverse = {}

Inverse.dictionary = {
   A: "∀",
   B: "q",
   C: "Ɔ",
   D: "p",
   E: "Ǝ",
   F: "Ⅎ",
   G: "פ",
   H: "H",
   I: "I",
   J: "ſ",
   K: "ʞ",
   L: "˥",
   M: "W",
   N: "N",
   O: "O",
   P: "Ԁ",
   Q: "Q",
   R: "ɹ",
   S: "S",
   T: "┴",
   U: "∩",
   V: "Λ",
   W: "M",
   X: "X",
   Y: "⅄",
   Z: "Z"
}

// récupération de la clé "inverse-activated" dans le localStorage
if(localStorage.getItem("inverse-activated") == undefined) {
   Inverse.activated = false;
   localStorage.setItem("inverse-activated", Inverse.activated)
} else {
   Inverse.activated = JSON.parse(localStorage.getItem("inverse-activated")) // Pour convertir la string en bool
}

// initialisation de la liste des string d'origine
Inverse.backup = []

// start inverse lorsque la page est chargée s'il est activé
document.addEventListener("DOMContentLoaded", () => {
   let texts = document.querySelectorAll("[inverse]")
   texts.forEach(el => {
      Inverse.backup.push(el.innerText)
   })
   Inverse.start()
});

// Change l'état du inverse
Inverse.toggle = () => {
    Inverse.activated = !Inverse.activated
   localStorage.setItem("inverse-activated", Inverse.activated)
   Inverse.start()
};

Inverse.activate = () => {
   if(localStorage.getItem("inverse-activated")==="false") {
    Inverse.toggle();
   }
};

Inverse.disactivate = () => {
   if(localStorage.getItem("inverse-activated")==="true") {
    Inverse.toggle();
   }
};

// Change dynamiquement le texte en inverse
Inverse.start = () => {
   let texts = document.querySelectorAll("[inverse]")
   if(Inverse.activated) {
      texts.forEach(el => {
         let innerText = el.innerText.toUpperCase().split(" ")
         innerText = innerText.map(word => {
            word = word.split("").map(letter => {
               if(Inverse.dictionary[letter] != undefined) {  
                  return Inverse.dictionary[letter];
               } else {
                  return letter
               }
            }).reverse().join("")
            return word;
         })
         el.innerText = innerText.reverse().join(" ")
      })
   } else {
      for(let i = 0; i<texts.length; i++) {
         texts[i].innerText = Inverse.backup[i]
      }
   }
};

