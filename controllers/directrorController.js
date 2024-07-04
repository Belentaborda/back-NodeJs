const Director = require('../models/director');

exports.getAllDirectors = async (req, res) => {
    try {
      const directors = await Director.findAll();
      res.status(200).json(directors);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };