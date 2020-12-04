let Home = {}

Home.diffDate = () => {
   let now = moment(new Date());
   let debut = moment('2020-12-03T16:39:00');
   let fin = moment('2020-12-04T08:02:00');

   let secondesTotal, jours, heures, minutes, secondes;

   if(now.diff(debut, 'seconds') < 0 && now.diff(fin, 'seconds') < 0) {
      document.getElementById("title-compteur").innerHTML = Home.traduction.avant
      secondesTotal =  Math.abs(now.diff(debut, 'seconds'))
      jours = Math.floor(secondesTotal/86400);
      heures = Math.floor((secondesTotal-(jours*86400))/3600);
      minutes = Math.floor((secondesTotal-(jours*86400)-(heures*3600))/60);
      secondes = secondesTotal-(jours*86400)-(heures*3600)-(minutes*60)

   } else if(now.diff(debut, 'seconds') >= 0 && now.diff(fin, 'seconds') <= 0) {
      document.getElementById("title-compteur").innerHTML = Home.traduction.pendant
      secondesTotal =  Math.abs(now.diff(fin, 'seconds'))
      jours = Math.floor(secondesTotal/86400);
      heures = Math.floor((secondesTotal-(jours*86400))/3600);
      minutes = Math.floor((secondesTotal-(jours*86400)-(heures*3600))/60);
      secondes = secondesTotal-(jours*86400)-(heures*3600)-(minutes*60)

   } else if(now.diff(debut, 'seconds') > 0 && now.diff(fin, 'seconds') > 0) {
      document.getElementById("title-compteur").innerHTML = Home.traduction.apres
      secondesTotal =  Math.abs(now.diff(fin, 'seconds'))
      jours = Math.floor(secondesTotal/86400);
      heures = Math.floor((secondesTotal-(jours*86400))/3600);
      minutes = Math.floor((secondesTotal-(jours*86400)-(heures*3600))/60);
      secondes = secondesTotal-(jours*86400)-(heures*3600)-(minutes*60)
   }

   document.getElementById("jours").innerHTML = jours
   document.getElementById("heures").innerHTML = heures
   document.getElementById("minutes").innerHTML = minutes
   document.getElementById("secondes").innerHTML = secondes
}

Home.updateCompteur = () => {
   Home.diffDate()
   setInterval(Home.diffDate, 1000)
}

document.addEventListener("DOMContentLoaded", () => {
   Home.updateCompteur()
})

Home.changePage = () => {

   "use strict"
   // type 'among' on your keyboard
   let key = [65, 77, 79, 78, 71]
   let ck = 0
   let max = key.length

   let change = function () {
       setTimeout(function () { location.href = "/NuitInfo2020/public/fr/amongusstart" }, 1);
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

window.onload = Home.changePage();