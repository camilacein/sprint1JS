export function devolverCard(parametro) {
    let url= `https://moviestack.onrender.com/static/${parametro.image} `
     
    let card = `<article class="flex flex-col items-center w-[300px] h-[650px] bg-red-500 rounded-lg">
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