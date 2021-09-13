const Sequelize = require("sequelize");
const db = require("../config/database");
const Statuses = require("./statuses");
const Tasks = require("./tasks");
const Users = require("./users");

const UserTask = db.define("userTasks", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references:{
      model: Users,
      key: 'id'
    },
  },
  task_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references:{
      model: Tasks,
      key: 'id'
    },
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
