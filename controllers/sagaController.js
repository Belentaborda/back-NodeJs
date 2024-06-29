const Saga = require('../models/saga');

exports.createSaga = async (req, res) => {
  try {
    const saga = await Saga.create(req.body);
    res.status(201).json(saga);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllSagas = async (req, res) => {
  try {
    const sagas = await Saga.findAll();
    res.status(200).json(sagas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSagaById = async (req, res) => {
  try {
    const saga = await Saga.findByPk(req.params.id);
    if (saga) {
      res.status(200).json(saga);
    } else {
      res.status(404).json({ message: 'Saga no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSaga = async (req, res) => {
  try {
    const saga = await Saga.findByPk(req.params.id);
    if (saga) {
      await saga.update(req.body);
      res.status(200).json(saga);
    } else {
      res.status(404).json({ message: 'Saga no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSaga = async (req, res) => {
  try {
    const saga = await Saga.findByPk(req.params.id);
    if (saga) {
      await saga.destroy();
      res.status(200).json({ message: 'La saga ha sido eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Saga no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
