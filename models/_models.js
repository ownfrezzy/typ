const Checklists = require("./checklists");
const Modules = require("./modules");
const SocialNetworks = require("./socialNetworks");
const Statuses = require("./statuses");
const Tasks = require("./tasks");
const Themes = require("./themes");
const ThemesChecklist = require("./themeschecklist");
const Users = require("./users");
const UsersModules = require("./usersmodules");
const UserTasks = require("./usertasks");

Users.hasMany(SocialNetworks, { foreignKey: "user_id" });
SocialNetworks.belongsTo(Users, { foreignKey: "user_id" });

Statuses.hasMany(UserTasks, { foreignKey: "status_id" });
UserTasks.belongsTo(Statuses, { foreignKey: "status_id" });

Users.belongsToMany(Tasks, { through: "UserTasks" });
Tasks.belongsToMany(Users, { through: "UserTasks" });

Users.belongsToMany(Modules, { through: "UsersModules" });
Modules.belongsToMany(Users, { through: "UsersModules" });

Modules.hasMany(Tasks, { foreignKey: "module_id" });
Tasks.belongsTo(Modules, { foreignKey: "module_id" });

Modules.hasMany(Checklists, { foreignKey: "module_id" });
Checklists.belongsTo(Modules, { foreignKey: "module_id" });

Modules.hasMany(Themes, { foreignKey: "module_id" });
Themes.belongsTo(Modules, { foreignKey: "module_id" });

Checklists.belongsToMany(Themes, { through: "ThemesChecklist" });
Themes.belongsToMany(Checklists, { through: "ThemesChecklist" });

const _modules = {
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

module.exports = _modules
