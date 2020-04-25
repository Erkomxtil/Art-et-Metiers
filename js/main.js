/* Affichage des informations pour la carte ----------------------------- */
function btnCampus () {
  /* bouton du campus */
  var btn = document.querySelector(".btnCampus")
  /*texte affiché */
  var infosPlus = document.querySelector(".infosMap")
  /* Contrôle sur la brillance de la carte */
  var mapBright = document.querySelector(".map figure")

  btn.addEventListener("click", function (e){
    e.preventDefault()

    if(infosPlus.className === "infosMap active"){
      infosPlus.classList.remove("active")
      mapBright.style.filter = "brightness(1)"
    } else {
      infosPlus.classList.add("active")
      btn.classList.add("out");
      mapBright.style.filter = "brightness(0.2)"
    }
  })
}

btnCampus();

/* Gestion du slider1 -------------------------------------------------- */
var imageTableau = [
  {
    title: "Un printemps Robotique à Arts et Métiers",
    text: "Le campus Arts et Métiers de Lille, se positionne comme un acteur incontournable de la robotique par ses activités de formation, de recherche et de transfert technologique.",
    image: "../image/slider1-1.jpg",
    id: 1
  },
  {
    title: "Arts et Métiers, tous mobilisés pour aider les soignants !",
    text: "Face à la pénurie de matériel médical, Arts et Métiers se mobilise. Enseignants-chercheurs, personnels et étudiants Arts et Métiers produisent du matériel à destination des soignants et des malades atteints du Covid-19.",
    image: "../image/slider1-2.jpg",
    id: 2
  },
  {
    title: "Le grand établissement de technologie",
    text: "Depuis sa création en 1780, Arts et Métiers s’attache à répondre aux défis industriels et aux enjeux sociétaux, en constante évolution. Sa première mission ? Former des ingénieurs spécialistes des technologies durables",
    image: "../image/slider1-3.jpg",
    id: 3
  }   
]
var indicateurImage = 0;
var imageBackground = document.getElementById("slider1")
var wrapper = document.createElement("div")
var listeMenu = document.createElement("ul")
var lien1 = document.createElement("li")
var lien2 = document.createElement("li")
var lien3 = document.createElement("li")
var title = document.createElement("h1")
var paragraphe = document.createElement("p")
var lireplus = document.createElement("p")
var fleche = document.createElement("div")

/* L'affichage de la 1ere image --*/
/*liens */
lien1.innerHTML = '<a href="#">Ecole</a>'
lien2.innerHTML = '<a href="#">Robotique</a>'
lien3.innerHTML = '<a href="#">Industrie du futur</a>'
listeMenu.appendChild(lien1)
listeMenu.appendChild(lien2)
listeMenu.appendChild(lien3)
lien1.className = "lienActif"

/* Titre */
title.textContent = imageTableau[0].title

/* paragraphe */
paragraphe.textContent = imageTableau[0].text

/* lien lire plus */
lireplus.innerHTML = '<a href="#">Lire plus</a>'
lireplus.className = "lirePlus"

/* fleche pour scroller vers le bas */ 
fleche.className = "fleche"

/* Infos affichées dans la div slider1 */
wrapper.className = "infosSlider1"
wrapper.appendChild(listeMenu)
wrapper.appendChild(title)
wrapper.appendChild(paragraphe)
wrapper.appendChild(lireplus)
imageBackground.appendChild(wrapper)
imageBackground.appendChild(fleche)


/* affichage des éléments du slider --*/
function slider1 () {
  if(indicateurImage < imageTableau.length -1){
    indicateurImage++
  }
  else {
    indicateurImage = 0
  }

  imageBackground.style.backgroundImage = 'url("'+ imageTableau[indicateurImage].image +'")'
  title.textContent = imageTableau[indicateurImage].title
  paragraphe.textContent = imageTableau[indicateurImage].text


  wrapper.appendChild(title)
  wrapper.appendChild(paragraphe)
  wrapper.appendChild(lireplus)
  imageBackground.appendChild(fleche)

  /* Gestion de l'onglet en cours */
  var id = imageTableau[indicateurImage].id 

  switch (id) {
    case 1:
      lien1.className = "lienActif"
      lien2.className = ""
      lien3.className = ""
    break;
    case 2:
      lien1.className = ""
      lien2.className = "lienActif"
      lien3.className = ""
    break
    case 3:
      lien1.className = ""
      lien2.className = ""
      lien3.className = "lienActif"
    break
    default:
      lien1.className = "lienActif"
  }
}
setInterval("slider1()", 8000)
