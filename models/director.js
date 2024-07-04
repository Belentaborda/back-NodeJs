const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Director = sequelize.define('Director', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
    },
    nationality: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'directors',
    timestamps: false,
  });
  
  module.exports = Director;
  