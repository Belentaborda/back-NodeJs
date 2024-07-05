const apiUrl = 'http://localhost:3000/api';
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

document.addEventListener('DOMContentLoaded', () => {
    if (movieId) {
        fetch(`${apiUrl}/movies/${movieId}`)
            .then(response => response.json())
            .then(movie => {
                console.log(movie); // Verificar la respuesta de la API
                if (movie) {
                    document.getElementById('titulo').value = movie.title;
                    document.getElementById('descripcion').value = movie.description;
                    document.getElementById('saga').value = movie.saga_id;

                    // Verificar y asignar directores y actores si existen
                    if (movie.Directors) {
                        document.getElementById('directores').value = movie.Directors.map(director => director.name).join(', ');
                    }
                    if (movie.Actors) {
                        document.getElementById('actores').value = movie.Actors.map(actor => actor.name).join(', ');
                    }
                }
            })
            .catch(error => console.error('Error fetching movie data:', error));
    }
});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const directors = document.getElementById('directores').value.split(',').map(name => name.trim());
    const actors = document.getElementById('actores').value.split(',').map(name => name.trim());

    const movieData = {
        title: document.getElementById('titulo').value,
        description: document.getElementById('descripcion').value,
        saga_id: document.getElementById('saga').value,
        directors,
        actors
    };

    console.log('Datos enviados:', movieData); // Agregar esta línea

    fetch(`${apiUrl}/movies/${movieId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                throw new Error(data.error);
            }
            alert('¡Película actualizada con éxito!');
            window.location.href = '../index.html'; // Redirige a la página principal después de la actualización
        })
        .catch(error => console.error('Error updating movie:', error));
});
