const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Movie = require('./movie');

const Review = sequelize.define('Review', {
  movie_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie,
      key: 'id',
    },
  },
  review: {
    type: DataTypes.TEXT,
  },
  rating: {
    type: DataTypes.FLOAT,
  },
  reviewer_name: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'reviews',
  timestamps: false,
});

Review.belongsTo(Movie, { foreignKey: 'movie_id' });

module.exports = Review;
