let LeetSpeak = {}

LeetSpeak.dictionary = {
   A: "4",
   B: "8",
   C: "C",
   D: "d",
   E: "3",
   F: "F",
   G: "6",
   H: "H",
   I: "!",
   J: "1",
   K: "k",
   L: "L",
   M: "M",
   N: "N",
   O: "0",
   P: "P",
   Q: "Q",
   R: "R",
   S: "5",
   T: "7",
   U: "U",
   V: "V",
   W: "W",
   X: "X",
   Y: "Ψ",
   Z: "Z"
}

LeetSpeak.activated = false;
LeetSpeak.backup = []

document.addEventListener("DOMContentLoaded", () => {
   if(!LeetSpeak.activated) {
      let texts = document.querySelectorAll("[leet-speak]")
      texts.forEach(el => {
         LeetSpeak.backup.push(el.innerText)
      })
   }
})

LeetSpeak.toggle = () => {
   LeetSpeak.activated = !LeetSpeak.activated
   let texts = document.querySelectorAll("[leet-speak]")
   if(LeetSpeak.activated) {
      texts.forEach(el => {
         let innerText = el.innerText.toUpperCase().split(" ")
         innerText = innerText.map(word => {
            word = word.split("").map(letter => {
               if(LeetSpeak.dictionary[letter] != undefined) {  
                  return LeetSpeak.dictionary[letter];
               } else {
                  return letter
               }
            }).join("")
            return word;
         })
         el.innerText = innerText.join(" ")
      })
   } else {
      for(let i = 0; i<texts.length; i++) {
         texts[i].innerText = LeetSpeak.backup[i]
      }
   }
}

