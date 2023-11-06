let main = document.querySelector("main")
let contenedor = document.createElement("div")
contenedor.className="contenedor"
main.appendChild(contenedor)
main.classList.add("flex","flex-col","items-center")
contenedor.classList.add("flex","flex-wrap","gap-6","place-content-center")

function devolverCard (parametro){
    let card = `<article class="flex flex-col items-center w-72 bg-red-500 rounded-lg">
        <img src="${parametro.image}" alt="" class="h-42 my-4 object-contein ">
        <h2 id="fuente" class="text-2xl font-bold text-center">${parametro.title}</h2>
        <h3 id="fuente" class="text-xl font-bold text-center" >${parametro.tagline}</h3>
        <p id="alice" class="text-center text-lg" >${parametro.overview}</p>
    </article>`
    return card
}
for(let i = 0; i < movies.length; i++){
    contenedor.innerHTML=contenedor.innerHTML+devolverCard(movies[i])
  
  }
 
