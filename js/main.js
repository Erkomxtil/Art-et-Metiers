/* Affichage des informations pour la carte */
const btnCampus = () => {
  let btn = document.querySelector(".btnCampus") /* bouton du campus */
  let infosPlus = document.querySelector(".infosMap") /*texte affiché */
  let mapBright = document.querySelector(".map figure") /* Contrôle sur la brillance de la carte */

  btn.addEventListener("click", (e) => {
    e.preventDefault()

    if(infosPlus.className === "infosMap active"){
      infosPlus.classList.remove("active")
      mapBright.style.filter = "brightness(1)"
    } else {
      infosPlus.classList.add("active")
      btn.classList.add("out")
      mapBright.style.filter = "brightness(0.2)"
    }
  })
}

btnCampus()