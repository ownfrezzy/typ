const { Sequelize } = require('sequelize');
module.exports = new Sequelize(
    process.env.DATABASE, 
    process.env.DB_USER, 
    process.env.PASSWORD, 
    {
      host: process.env.HOST,
      dialect: process.env.DIALECT,
    }
  )