const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Movie = require('./movie');
const Actor = require('./actor');

const MovieActor = sequelize.define('MovieActor', {
  movie_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie,
      key: 'id',
    },
  },
  actor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Actor,
      key: 'id',
    },
  },
  role: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'movie_actors',
  timestamps: false,
});

Movie.belongsToMany(Actor, { through: MovieActor, foreignKey: 'movie_id' });
Actor.belongsToMany(Movie, { through: MovieActor, foreignKey: 'actor_id' });

module.exports = MovieActor;
