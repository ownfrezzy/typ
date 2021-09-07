const Sequelize = require("sequelize");
const db = require("../config/database");

const UsersModules = db.define("UsersModules", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  module_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = UsersModules;
