export function devolverCard(parametro) {
    let url= `https://moviestack.onrender.com/static/${parametro.image} `
     
    let card = `<article class="article flex flex-col items-center w-[300px] h-[650px] bg-red-500 rounded-lg">
    <button data-accion="fav" data-id="${parametro.id}" class="btn">
    <img id="like" data-accion="fav" data-id="${parametro.id}" src="images/like.png" alt="" class="mt-2 w-[30px] h-[30px]">
    </button>
        <img src="${url}" alt="" class="h-42 my-4 object-contein ">
        <h2 id="fuente" class="text-xl font-bold text-center">${parametro.title}</h2>
        <h3 id="fuente" class="text-lg font-bold text-center" >${parametro.tagline}</h3>
        <p id="alice" class="text-center text-lg whitespace-no-wrap overflow-hidden text-overflow-ellipsis max-w-200" >${parametro.overview}</p>
        <a href="./detalles.html?id=${parametro.id}" id="alice" class="bg-red-700 rounded-lg" >Details</a>
    </article>`
    return card
}
export function imprimirCard(devolverCard,contenedor) {
    for (let i = 0; i < movies.length; i++) {
        contenedor.innerHTML = contenedor.innerHTML + devolverCard(movies[i])

    }
}

export const imprimirMovies = ( listaPelis, contenedor ) => {
    let aux = ""
    for (const peli of listaPelis) {
        aux += devolverCard( peli )
    }
    if( aux ){
        contenedor.innerHTML = aux
    }else{
        contenedor.innerHTML = "no hay pelicula que coincida con ese titulo"
    }
}
export function select(genero) {
    return `<option value="${genero}">${genero}</option>
`
}
export function imprimirGenero(genres,seleccionar) {
    for (let i = 0; i < genres.length; i++) {
        seleccionar.innerHTML = seleccionar.innerHTML + select(genres[i])


    }
}
export function filtrarPelis(buscarpornombre,seleccionar,contenedor,movies) {
    let inputtext = buscarpornombre.value
    let generoSeleccionado = seleccionar.value
    let pelisFiltradas
    if (generoSeleccionado === "all") {
        pelisFiltradas = movies.filter(movie => movie.title.includes(inputtext))
    } else {
        pelisFiltradas = movies.filter(movie =>
            (inputtext === "" || movie.title.includes(inputtext)) &&
            movie.genres.includes(generoSeleccionado))

    }

    imprimirMovies(pelisFiltradas,contenedor)
}
export function mostrarPelis(movies,listaPelis) {

    listaPelis.innerHTML = ""
    if (seleccionar.value == "all") {
        imprimirCard(devolverCard)
        listaPelis.appendChild(contenedor)

    }
    movies.forEach(movie => {
        const lista = document.createElement("li")
        lista.innerHTML = devolverCard(movie)
        listaPelis.appendChild(lista)
    })

}
export function filtrarNombre(buscarpornombre,seleccionar) {
    let input = buscarpornombre.value
    let generoSeleccionado1 = seleccionar.value
    let filtrarPelis
    if (generoSeleccionado1 === "all") { filtrarPelis = movies.filter(movie => movie.title.includes(input)) }
    else { filtrarPelis = movies.filter(movie => movie.title.includes(input) && movie.genres.includes(generoSeleccionado1)) }

    mostrarPelis(filtrarPelis)
}


/*export function MostrarFavoritos(peliculas,boton,id, evento){
   let imgid= img.dataset.id
   let buttonid= button.dataset.fav
   let imglike= document.querySelectorAll("#like")
   let contenedorfavs = document.getElementById("contenedor-favs")
   console.log(imgid)
   buttonid.addEventListener("click", ()=>{
       if(imglike){
    imprimirCard(devolverCard,contenedorfavs)
    }
      
   })
}*/

/*let fav= button.dataset.fav*/







export function devolverCardFav(parametro) {
    let url= `https://moviestack.onrender.com/static/${parametro.image} `
     
    let card = `<article data-id="${parametro.id}" class="article flex flex-col items-center w-[300px] h-[650px] bg-red-500 rounded-lg">
    <button data-fav="fav" data-id"${parametro.id}">
    <img id="like" src="images/like.png" alt="" data-fav="fav" data-id"${parametro.id}" class="mt-2 w-[30px] h-[30px]">
    </button>
    
    
   
        <img src="${url}" alt="" class="h-42 my-4 object-contein ">
        <h2 id="fuente" class="text-xl font-bold text-center">${parametro.title}</h2>
        <h3 id="fuente" class="text-lg font-bold text-center" >${parametro.tagline}</h3>
        <p id="alice" class="text-center text-lg whitespace-no-wrap overflow-hidden text-overflow-ellipsis max-w-200" >${parametro.overview}</p>
        <a href="./detalles.html?id=${parametro.id}" id="alice" class="bg-red-700 rounded-lg" >Details</a>
    </article>`
    return card
}

    /*contenedor.addEventListener("click", (evento) => {
        const dataset = evento.target.dataset



        if (dataset.accion == "fav") {
            console.log(evento.target.dataset)


            if (favoritas.includes(evento.target.dataset.id)) {
                favoritas = favoritas.filter(favorita => favorita !== evento.target.dataset.id)
            }
            else {
                favoritas.push(evento.target.dataset.id)
            }
            localStorage.setItem('favoritas', JSON.stringify(favoritas));
        }
        console.log(favoritas)

        
    })*/

export function crearTemplate(listaMovies) {
    let template = ""
    for (const movie of listaMovies) {
        template += devolverCard(movie)
    }
    console.log(template)
    return template
}

