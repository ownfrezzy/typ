const Sequelize = require("sequelize");
const db = require("../config/database");

const ThemesChecklists = db.define("themesChecklists", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  checklist_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  theme_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = ThemesChecklists;
