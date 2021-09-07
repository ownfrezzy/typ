const Sequelize = require("sequelize");
const db = require("../config/database");

const Modules = db.define("Modules", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  colour: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Modules;
