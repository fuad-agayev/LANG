//  --------------------               language select       -------------------------------

document.getElementById("languageSelector").addEventListener("change", async (event) => {
  const selectedLanguage = event.target.value;   // Secilen dili ALmaq
  try {
    const response = await fetch(`./languages/${selectedLanguage}.json`);
    const translations = await response.json();
    document.querySelectorAll("[id]").forEach((element) => {
      
      const key = element.id;
  
      if(translations[key]){
         element.textContent = translations[key];
      }
    })
    const page = document.body.getAttribute('data-page');
    const pageTranslations = translations[page]
    if(pageTranslations){
                if(pageTranslations.title){
                    document.title = pageTranslations.title
                }
    }
  localStorage.setItem("selectedLanguage", selectedLanguage);
  }catch(error){
           console.log("Dil cevirisi yuklenemedi:", error)
  }

})


window.addEventListener("DOMContentLoaded", async () => {
    const savedLanguage = localStorage.getItem("selectedLanguage" || "en");
    document.getElementById("languageSelector").value = savedLanguage;
    try {
              const response = await fetch(`./languages/${savedLanguage}.json`);
              const translations = await response.json();
              document.querySelectorAll("[id]").forEach((elem)=>{
                const key = elem.id;
                 if(translations[key]){
                    elem.textContent = translations[key]
                 }
              });
              const page = document.body.getAttribute("data-page");
              const pageTranslations = translations[page];
              if(pageTranslations){
                   if(pageTranslations.title){
                    document.title = pageTranslations.title
                   }
              }
    } catch(error){
               console.log("Dil cevirme islemi yuklenemedi:", error);
    }
}) 

//  --------------------               language select       -------------------------------


//  --------------------  mega menu image change when links for HOVER   ------------------------

  const dynamicImage = document.getElementById("dynamicPhoto");
  const imageList = document.getElementById("imageList");
  const changeImage = imageList.querySelectorAll("li a");

  changeImage.forEach((link) => {
     link.addEventListener("mouseover",() => {
      const imgSrc = link.getAttribute("data-image");
      dynamicImage.src = imgSrc;
     })
     link.addEventListener("mouseout", ()=> {
      dynamicImage.src = "chine-cosmos.jpg"
     })
  })


//  --------------------  mega menu image change when links for HOVER   ------------------------


//  --------------------           dark and light mode            ------------------------------
const sunLight = document.querySelector(".sunlight");
const moonLight = document.querySelector(".moonlight");

document.addEventListener("DOMContentLoaded", ()=> {
  const isDarkMode = localStorage.getItem("dark-mode") === "true";

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    moonLight.style.display = "block";
    sunLight.style.display = "none";
  } else {
    document.body.classList.remove("dark-mode");
    moonLight.style.display = "none";
    sunLight.style.display = "block";
  }
});


sunLight.addEventListener("click", () => {
  moonLight.style.display = "block";
  sunLight.style.display = "none";
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", "true");
})

moonLight.addEventListener("click", () => {
 sunLight.style.display = "block";
 moonLight.style.display = "none";
 document.body.classList.toggle("dark-mode");
 localStorage.setItem("dark-mode", "false");
})
//  --------------------           dark and light mode            ------------------------------

