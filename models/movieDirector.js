const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Movie = require('./movie');
const Director = require('./director');

const MovieDirector = sequelize.define('MovieDirector', {
    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Movie,
            key: 'id',
        },
    },
    director_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Director,
            key: 'id'
        }
    }
},
    {
        tableName: 'movie_director',
        timestamps: false
    }
)

module.exports = MovieDirector;