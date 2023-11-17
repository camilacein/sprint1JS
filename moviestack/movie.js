import { devolverCard,imprimirCard,select, imprimirGenero, filtrarPelis, mostrarPelis, imprimirMovies, filtrarNombre } from "./funciones.js"
let main = document.querySelector("main")
let contenedor = document.createElement("div")
const listaPelis = document.getElementById("lista-pelis")
let seleccionar = document.getElementById("generos")
let label = document.getElementById("label")
let buscarpornombre = document.getElementById("buscar")
contenedor.className = "contenedor"
listaPelis.appendChild(contenedor)
main.classList.add("flex", "flex-col", "items-center")
contenedor.classList.add("flex", "flex-wrap", "gap-6", "place-content-center")
let movies

let url="https://moviestack.onrender.com/api/movies"
 let api="0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
 let options ={
headers:{
"x-api-key":api
}
}
fetch(url,options)
.then(pelis=>pelis.json())
.then(data=>{
   movies=data.movies
    console.log(data)
    let genres = new Set()
for (const movie of movies) {
    movie.genres.forEach(genre => genres.add(genre))
}
genres = Array.from(genres)
console.log(genres)



seleccionar.addEventListener("change", ()=>{
filtrarPelis(buscarpornombre,seleccionar,contenedor, movies)
})



imprimirMovies(movies,contenedor)
imprimirGenero(genres,seleccionar)

let title = new Set()
for (const movie of movies) {
    title.add(movie.title)
}
console.log(title)
buscarpornombre.addEventListener("input", ()=>{
    filtrarPelis(buscarpornombre,seleccionar,contenedor,movies)
    })

   /* devolverCard(data.movies)
imprimirCard(devolverCard,contenedor)*/
})
.catch(error => console.error(error))




//sprint 2 

 