let Base = {}
Base.changeLocale = (locale) => {
   let newUrl = document.location.pathname.split("/")
   if(locale == "en") {
      newUrl[1] = "fr"
   } else {
      newUrl[1] = "en"
   }
   newUrl = newUrl.join("/")
   newUrl = newUrl+document.location.search
   document.location.href = newUrl;
}

Base.onLoadNavBarColor = () => {
   if(window.scrollY > 56) {
      document.getElementById("navbar").classList.add("fixed-bg")
   } else {
      document.getElementById("navbar").classList.remove("fixed-bg")
   }
}

window.addEventListener("scroll", Base.onLoadNavBarColor)
window.addEventListener("DOMContentLoaded", Base.onLoadNavBarColor)