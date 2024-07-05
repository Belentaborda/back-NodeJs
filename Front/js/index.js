const apiUrl = 'http://localhost:3000/api';

const MainDetalle = document.querySelector(".mainDetalle")
const Detalle = document.createElement("section")
Detalle.classList.add("detalle")
MainDetalle.appendChild(Detalle)

function fetchMovies() {
  fetch(`${apiUrl}/movies`)
    .then(response => response.json())
    .then(movies => {
      let contenido = ""
      movies.forEach(movie => {
        let directors = movie.Directors.map(director => director.name).join('<br>');
        let actors = movie.Actors.map(actor => actor.name).join('<br>');
        let sagaName = movie.Saga ? movie.Saga.name : 'No asignada';
        contenido += `
              <section class="detalle" data-aos="zoom-in"">
                <div class="contenedorDetalle">
                  <div class="textoDetalle">
                    <h1>${movie.title}</h1>
                    <h2>Descripción</h2>
                    <p>${movie.description}</p>
                    <div class="contenedorCreditos">
                        <div>
                            <h3>Directores</h3>
                            <p>${directors}</p>
                        </div>
                        <div>
                            <h3>Actores</h3>
                            <p>${actors}</p>
                        </div>
                        <div>
                            <h3>Sagas</h3>
                            <p>${sagaName}</p>
                        </div>
                    </div>
                    <div class="buttonContainer">
                        <div>
                            <input class="boton btnEditar" type="submit" value="Editar" data-id="${movie.id}">
                        </div>
                        <div>
                            <input class="boton btnEliminar" type="submit" value="Eliminar" data-id="${movie.id}">
                        </div>
                    </div>
                  </div>
              </section>
            `
      });
      Detalle.innerHTML = contenido;

      // event listeners de los botones
      document.querySelectorAll(".btnEditar").forEach(button => {
        button.addEventListener("click", (event) => {
          const movieId = event.target.getAttribute('data-id');
          window.location.href = `./pages/edit.html?id=${movieId}`;
        });
      });

      document.querySelectorAll(".btnEliminar").forEach(button => {
        button.addEventListener("click", (event) => {
          const movieId = event.target.getAttribute('data-id');
          fetch(`${apiUrl}/movies/${movieId}`, {
            method: 'DELETE'
          })
            .then(response => response.json())
            .then(data => {
              alert('¡La película se eliminó de forma exitosa!');
              fetchMovies(); // Recarga la lista de películas
            })
            .catch(error => console.error('Error deleting movie:', error));
        });
      });
    });
}

fetchMovies();
