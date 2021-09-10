const Sequelize = require("sequelize");
const db = require("../config/database");

const Checklists = db.define("checklists", {
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
  module_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Checklists;
