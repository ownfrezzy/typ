const Sequelize = require("sequelize");
const db = require("../config/database");
const Modules = require("./modules");
const Users = require("./users");

const UsersModules = db.define("usersModules", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Users,
      key: "id",
    },
    allowNull: false,
  },
  module_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Modules,
      key: "id",
    },
    allowNull: false,
  },
});

module.exports = UsersModules;
