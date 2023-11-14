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

function devolverCard(parametro) {
    let card = `<article class="flex flex-col items-center w-[300px] h-[650px] bg-red-500 rounded-lg">
        <img src="${parametro.image}" alt="" class="h-42 my-4 object-contein ">
        <h2 id="fuente" class="text-xl font-bold text-center">${parametro.title}</h2>
        <h3 id="fuente" class="text-lg font-bold text-center" >${parametro.tagline}</h3>
        <p id="alice" class="text-center text-lg whitespace-no-wrap overflow-hidden text-overflow-ellipsis max-w-200" >${parametro.overview}</p>
        <a href="detalles.html?id=${parametro.id}" id="alice" class="bg-red-700 rounded-lg" >Details</a>
    </article>`
    return card
}
function imprimirCard(devolverCard) {
    for (let i = 0; i < movies.length; i++) {
        contenedor.innerHTML = contenedor.innerHTML + devolverCard(movies[i])

    }
}

//sprint 2 
let genres = new Set()
for (const movie of movies) {
    movie.genres.forEach(genre => genres.add(genre))
}
genres = Array.from(genres)
console.log(genres)

function select(genero) {
    return `<option value="${genero}">${genero}</option>
`
}
function imprimirGenero(genres) {
    for (let i = 0; i < genres.length; i++) {
        seleccionar.innerHTML = seleccionar.innerHTML + select(genres[i])


    }
}
seleccionar.addEventListener("change", filtrarPelis)
function filtrarPelis() {
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

    mostrarPelis(pelisFiltradas)
}
function mostrarPelis(movies) {

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

imprimirCard(devolverCard)
imprimirGenero(genres)

let title = new Set()
for (const movie of movies) {
    title.add(movie.title)
}
console.log(title)
buscarpornombre.addEventListener("input", filtrarNombre)
function filtrarNombre() {
    let input = buscarpornombre.value
    let generoSeleccionado1 = seleccionar.value
    let filtrarPelis
    if (generoSeleccionado1 === "all") { filtrarPelis = movies.filter(movie => movie.title.includes(input)) }
    else { filtrarPelis = movies.filter(movie => movie.title.includes(input) && movie.genres.includes(generoSeleccionado1)) }

    mostrarPelis(filtrarPelis)
}

