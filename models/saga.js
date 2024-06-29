const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Saga = sequelize.define('Saga', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  start_year: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'sagas',
  timestamps: false,
});

module.exports = Saga;
