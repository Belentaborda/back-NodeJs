const Review = require('../models/review');

exports.createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      res.status(200).json(review);
    } else {
      res.status(404).json({ message: 'Reseña no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      await review.update(req.body);
      res.status(200).json(review);
    } else {
      res.status(404).json({ message: 'Reseña no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (review) {
      await review.destroy();
      res.status(200).json({ message: 'La reseña ha sido eliminada correctamente' });
    } else {
      res.status(404).json({ message: 'Reseña no encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
