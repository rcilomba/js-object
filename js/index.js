document.addEventListener("DOMContentLoaded", ()=> {

    // slå dig løs her... 

    // hero
//   let herosElm = document.querySelector(".hero")



/*let herosElm = document.querySelector(".hero")

hero.forEach(heroFunction => {

  let div = document.createElement("div")
  div.classList.add("hero__bg")

  div.innerHTML= `
  <h1 class="hero__headline">${heroFunction.headline}</h1>


  `

  herosElm.append(div)
})
*/



    //services

let servicesElm = document.querySelector(".services")

services.forEach(serviceFunction => { //functionen heter serviceFunction i detta fall

let div = document.createElement("div") //skapar div i <section class="serveices"
div.classList.add("services__box") // namnet diven ovan till  "services__box"

//data tagen från data.js (object) nedan
div.innerHTML = ` 

<img class="services__image" src="${serviceFunction.illustration}" alt="${serviceFunction.illustration}">
 <h2 class="services__headline">${serviceFunction.headline}</h2>
 <p class="services__text">${serviceFunction.text}</p>
 <p class="services__linktext">${serviceFunction.linktext}</p>

 `
servicesElm.append(div) //lägger till html från  i innerHTML =`` till diven skapats på rad 35
})









    

}) 