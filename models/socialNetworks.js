const Sequelize = require("sequelize");
const db = require("../config/database");

const SocialNetworks = db.define("SocialNetworks", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  telegram: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  instagram: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = SocialNetworks;
