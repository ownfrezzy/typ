const Sequelize = require("sequelize");
const db = require("../config/database");

const Statuses = db.define("statuses", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },  
});

module.exports = Statuses;
