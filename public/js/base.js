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
