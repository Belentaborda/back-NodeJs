const Director = require('../models/director');
const Actor = require('../models/actor');
const Movie = require('../models/movie');
const Saga = require('../models/saga');

exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll({
      include: [
        {
          model: Director,
          attributes: ['name'],
          through: { attributes: [] } // Para no incluir la tabla de relación en los resultados
        },
        {
          model: Actor,
          attributes: ['name'],
          through: { attributes: [] }
        },
        {
          model: Saga,
          attributes: ['name'],
          as: 'Saga'
        }
      ]
    });
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id, {
      include: [
        {
          model: Director,
          attributes: ['name'],
          through: { attributes: [] }
        },
        {
          model: Actor,
          attributes: ['name'],
          through: { attributes: [] }
        },
        {
          model: Saga,
          attributes: ['name'],
          as: 'Saga'
        }
      ]
    });
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ message: 'Pelicula no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.updateMovie = async (req, res) => {
  const { title, description, saga_id, directors, actors } = req.body;

  try {
    const movie = await Movie.findByPk(req.params.id);
    if (movie) {
      await movie.update({ title, description, saga_id });

      // Actualizar directores
      if (directors) {
        const directorInstances = await Promise.all(
          directors.map(async (name) => {
            const [director] = await Director.findOrCreate({ where: { name } });
            return director;
          })
        );
        await movie.setDirectors(directorInstances);
      }

      // Actualizar actores
      if (actors) {
        const actorInstances = await Promise.all(
          actors.map(async (name) => {
            const [actor] = await Actor.findOrCreate({ where: { name } });
            return actor;
          })
        );
        await movie.setActors(actorInstances);
      }

      res.status(200).json(movie);
    } else {
      res.status(404).json({ message: 'Pelicula no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (movie) {
      // Eliminar relaciones con directores y actores
      await movie.setDirectors([]);
      await movie.setActors([]);

      // Eliminar la película
      await movie.destroy();
      res.status(200).json({ message: 'La película ha sido eliminada correctamente' });
    } else {
      res.status(404).json({ message: 'Película no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

