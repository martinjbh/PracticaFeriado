const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:cr1st1n4buf1d1s@localhost:5432/prueba', { logging: false })
module.exports={sequelize,DataTypes}