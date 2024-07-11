const apiUrl = 'http://localhost:3000/api';
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#postMovie').addEventListener('submit', (event) => {
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

        console.log('Datos enviados:', movieData);

        fetch(`${apiUrl}/movies`, {
            method: 'POST',
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
                alert('¡Película cargada con éxito!');
                window.location.href = '../index.html'; // Redirige a la página principal después de la carga
            })
            .catch(error => console.error('Error cargando la película:', error));
    });
});
