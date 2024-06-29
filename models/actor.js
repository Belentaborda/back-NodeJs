const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Actor = sequelize.define('Actor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATE,
  },
  nationality: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'actors',
  timestamps: false,
});

module.exports = Actor;
