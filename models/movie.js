const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Saga = require('./saga');

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  release_date: {
    type: DataTypes.DATE,
  },
  genre: {
    type: DataTypes.STRING,
  },
  saga_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Saga,
      key: 'id',
    },
  },
}, {
  tableName: 'movies',
  timestamps: false,
});

Movie.belongsTo(Saga, { foreignKey: 'saga_id' });

module.exports = Movie;
