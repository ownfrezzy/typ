const Sequelize = require("sequelize");
const db = require("../config/database");

const UserTask = db.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  task_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  link_github: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = UserTask;
