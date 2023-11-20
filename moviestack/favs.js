import {crearTemplate,devolverCardFav ,devolverCard,imprimirCard,select, imprimirGenero, filtrarPelis, mostrarPelis, imprimirMovies, filtrarNombre } from "./funciones.js"

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
   movies=data.movies.filter(movie=>
   favoritas.includes(movie.id))
   contenedorfav.innerHTML+=crearTemplate(movies)
   allMovies=data.movies})
   let contenedorfav= document.getElementById("contenedor-favs")
   let favoritas = JSON.parse(localStorage.getItem('favoritas')) || []
   contenedorfav.addEventListener("click", (event) => {
       const idboton=event.target.dataset.id
       console.log(idboton)
       if(idboton){
    if(!favoritas.includes(idboton)){
    favoritas.push(idboton)
    localStorage.setItem('favoritas', JSON.stringify(favoritas));
    }
else{
favoritas.splice(favoritas.indexOf(idboton), 1)
localStorage.setItem('favoritas', JSON.stringify(favoritas));
}
const pelis2= allMovies.filter(movie=>favoritas.includes(movie.id))
contenedorfav.innerHTML=crearTemplate(pelis2)
}
   })

.catch(error => console.error(error))



