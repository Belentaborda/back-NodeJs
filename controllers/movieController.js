const Director = require('../models/director');
const Actor = require('../models/actor');
const Movie = require('../models/movie');

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
      ]
    });
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
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
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (movie) {
      await movie.update(req.body);
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
      await movie.destroy();
      res.status(200).json({ message: 'La pelicula ha sido eliminada correctamente' });
    } else {
      res.status(404).json({ message: 'Pelicula no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
