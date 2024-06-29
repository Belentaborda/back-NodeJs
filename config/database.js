const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('movie_sagas_db', 'root', '', {
  host: 'localhost',
  port: 3307,
  dialect: 'mysql',
});

module.exports = sequelize;
