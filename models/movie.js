const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Saga = require('./saga');
const Actor = require('./actor');
const Director = require('./director');
const MovieActor = require('./movieActor')
const MovieDirector = require('./movieDirector')

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
  description: {
    type: DataTypes.STRING,
  },
  saga_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Saga,
      key: 'id',
    },
  }
}, {
  tableName: 'movies',
  timestamps: false,
});

Movie.belongsTo(Saga, { foreignKey: 'saga_id' });

Movie.belongsToMany(Actor, { through: MovieActor, foreignKey: 'movie_id' });
Actor.belongsToMany(Movie, { through: MovieActor, foreignKey: 'actor_id' });

Movie.belongsToMany(Director, { through: MovieDirector, foreignKey: 'movie_id' })
Director.belongsToMany(Movie, { through: MovieDirector, foreignKey: 'director_id' })


module.exports = Movie;
