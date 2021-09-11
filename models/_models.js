const Checklists = require("./checklists");
const Modules = require("./modules");
const SocialNetworks = require("./socialNetworks");
const Statuses = require("./statuses");
const Tasks = require("./tasks");
const Themes = require("./themes");
const ThemesChecklist = require("./themesChecklist");
const Users = require("./users");
const UsersModules = require("./usersModules");
const UserTasks = require("./userTasks");

Users.hasMany(SocialNetworks, { foreignKey: "user_id" });
// SocialNetworks.belongsTo(Users, { foreignKey: "user_id" });

UserTasks.hasOne(Statuses, { foreignKey: "status_id" });
Statuses.belongsTo(UserTasks, { foreignKey: "status_id" });

Users.belongsToMany(Tasks, { through: "userTasks" });
Tasks.belongsToMany(Users, { through: "userTasks" });

Users.belongsToMany(Modules, { through: "usersModules" });
Modules.belongsToMany(Users, { through: "usersModules" });

Modules.hasMany(Tasks, { foreignKey: "module_id" });
Tasks.belongsTo(Modules, { foreignKey: "module_id" });

Modules.hasMany(Checklists, { foreignKey: "module_id" });
Checklists.belongsTo(Modules, { foreignKey: "module_id" });

Modules.hasMany(Themes, { foreignKey: "module_id" });
Themes.belongsTo(Modules, { foreignKey: "module_id" });

Checklists.belongsToMany(Themes, { through: "themesChecklists" });
Themes.belongsToMany(Checklists, { through: "themesChecklists" });

const _models = {
    Checklists,
    Modules,
    SocialNetworks,
    Statuses,
    Tasks,
    Themes,
    ThemesChecklist,
    Users,
    UsersModules,
    UserTasks
}

module.exports = _models
