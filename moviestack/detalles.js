const search = location.search
const params = new URLSearchParams(search)
const id = params.get("id")

const contenedor3 = document.getElementById("contenedor3")
function encontrarPeliculaPorId(id) {
  return movies.find(movie => movie.id == id);
}
const peliculaEncontrada = encontrarPeliculaPorId(id)
function generarHTMLPelicula(pelicula) {
  return `
    <div class="flex m-9 flex-wrap justify-center">
    <div class="flex">
    <img class="h-92 object-contain" src="${pelicula.image}" alt="">
    </div>
      
      <div class="flex flex-col md:h-1/3 md:w-1/3">
      <h2 id="fuente" class="text-3xl text-center" >${pelicula.title}</h2>
      <h3 id="fuente" class="text-center text-2xl" >${pelicula.tagline}</h3>
      <p id="alice" class="text-xl">${pelicula.overview}</p>
      </div>
      
    </div>
    
    <div class="flex flex-wrap justify-center">
    <table id="alice" class="border border-collapse border-black w-[270px] h-[270px] text-2xl text-center m-9">
      <tbody>
        <tr class="border border-black">
          <td class="bg-red-700">Original Language</td>
          <td>${pelicula.original_language}</td>
        </tr>
        <tr class="border border-black">
          <td class="bg-red-700">Release Date</td>
          <td>${pelicula.release_date}</td>
        </tr>
        <tr class="border border-black">
          <td class="bg-red-700">Runtime</td>
          <td >${pelicula.runtime}</td>
        </tr>
        <tr class="border border-black">
          <td class="bg-red-700">Status</td>
          <td>${pelicula.status}</td>
        </tr>
        </tbody>
        </table>
          <table id="alice" class=" border border-collapse border-black w-[270px] h-[270px] text-2xl text-center m-9" >
          <tbody>
          <tr class=" border border-black" >
          <td class="bg-red-700">Vote Average</td>
          <td>${pelicula.vote_average}</td>
        </tr>
        <tr class=" border border-black">
          <td class="bg-red-700">Budget</td>
          <td>${pelicula.budget}</td>
        </tr>
        <tr class="border border-black" >
          <td class="bg-red-700">Revenue</td>
          <td>${pelicula.revenue}</td>
        </tr>
        </tbody>
      </table>
    </div>`;
}

contenedor3.innerHTML = generarHTMLPelicula(peliculaEncontrada)