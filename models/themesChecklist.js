const Sequelize = require("sequelize");
const db = require("../config/database");
const Themes = require('./themes')
const Checklists = require('./checklists')

const themesChecklist = db.define("themesChecklists", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  checklist_id: {
    type: Sequelize.INTEGER,
    references:{
      model: Checklists,
      key: 'id'
    },
    allowNull: false,
  },
  theme_id: {
    type: Sequelize.INTEGER,
    references:{
      model: Themes,
      key: 'id'
    },
    allowNull: false,
  },
});

module.exports = themesChecklist;
