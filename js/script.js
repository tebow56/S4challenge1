import peliculas from './peliculas.js';

const acción = document.getElementById('genero-28');

function incluiracción() {
    const peliculasAcción = peliculas.filter(pelicula => pelicula.genre_ids.includes(28))
    return peliculasAcción.map(peli =>{
        const prueba = `
        <li>
            <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt:"Poster película>
            <h4>${peli.title}</h4>
        </li>`
        return prueba
    });
}

acción.innerHTML = incluiracción()


const thriller = document.getElementById('genero-53');

function incluirthriller() {
    const peliculasThriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(53))
    return peliculasThriller.map(peli =>{
        const prueba = `
        <li>
            <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt:"Poster película>
            <h4>${peli.title}</h4>
        </li>`
        return prueba
    });
}

thriller.innerHTML = incluirthriller()

const aventura = document.getElementById('genero-12');

function incluirAventura() {
    const peliculasAventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(12))
    return peliculasAventura.map(peli =>{
        const prueba = `
        <li>
            <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" alt:"Poster película>>
            <h4>${peli.title}</h4>
        </li>`
        return prueba
    });
}

aventura.innerHTML = incluirAventura()

