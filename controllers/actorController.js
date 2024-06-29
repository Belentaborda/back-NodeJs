const Actor = require('../models/actor');

exports.createActor = async (req, res) => {
  try {
    const actor = await Actor.create(req.body);
    res.status(201).json(actor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllActors = async (req, res) => {
  try {
    const actors = await Actor.findAll();
    res.status(200).json(actors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getActorById = async (req, res) => {
  try {
    const actor = await Actor.findByPk(req.params.id);
    if (actor) {
      res.status(200).json(actor);
    } else {
      res.status(404).json({ message: 'Actor no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateActor = async (req, res) => {
  try {
    const actor = await Actor.findByPk(req.params.id);
    if (actor) {
      await actor.update(req.body);
      res.status(200).json(actor);
    } else {
      res.status(404).json({ message: 'Actor no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteActor = async (req, res) => {
  try {
    const actor = await Actor.findByPk(req.params.id);
    if (actor) {
      await actor.destroy();
      res.status(200).json({ message: 'Actor eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Actor no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
