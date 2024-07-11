const Director = require('../models/director');

exports.createDirector = async (req, res) => {
  try {
    const director = await Director.create(req.body);
    res.status(201).json(director);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getAllDirectors = async (req, res) => {
    try {
      const directors = await Director.findAll();
      res.status(200).json(directors);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };