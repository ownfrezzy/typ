const Checklists = require("./checklists");
const Modules = require("./modules");
const SocialNetworks = require("./socialNetworks");
const Statuses = require("./statuses");
const Tasks = require("./tasks");
const Themes = require("./themes");
const themesChecklist = require("./themesChecklist");
const Users = require("./users");
const UsersModules = require("./usersModules");
const UserTasks = require("./userTasks");

Users.hasMany(SocialNetworks, { foreignKey: "user_id" });
SocialNetworks.belongsTo(Users, { foreignKey: "user_id" });

Statuses.hasOne(UserTasks);
UserTasks.belongsTo(Statuses, { foreignKey: "status_id" });

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

Checklists.belongsToMany(Themes, { through: "themesChecklist" });
Themes.belongsToMany(Checklists, { through: "themesChecklist" });

// create fake data
// Users.sync({ force: true }).then(function () {
//   return Users.create({
//     login: "example@gmail.com",
//     password: "sobaka",
//     firstName: "Kiryl",
//     lastName: "Sachuk",
//     isAdmin: true,
//   });
// });

// Statuses.sync({ force: true}).then(function () {
//     return Statuses.create({
//         text: 'Pending'
//     })
// })

// Modules.sync({ force: true }).then(function () {
//   return Modules.create({
//     title: "React",
//     color: "#0000FF",
//   });
// });

// Tasks.sync({ force: true }).then(function () {
//   return Tasks.create({
//     module_id: 1,
//     title: "Задача 2",
//     description: `Тролли атакуют ваш раздел комментариев!`,
//   });
// });

// UserTasks.sync({force: true}).then(function() {
//     return UserTasks.create({
//         user_id: 1,
//         task_id: 1,
//         status_id: 1,
//         link_github: "https://github.com/ownfrezzy/todo/blob/master/services/todo.services.js#L38"
//     })
// })

// SocialNetworks.sync({ force: true }).then(function () {
//   return SocialNetworks.create({
//     telegram: "@liriksachuk",
//     instagram: "@liriksachuk",
//     user_id: 1,
//   });
// });

// Themes.sync({ force: true }).then(function () {
//   return Themes.create({
//     title: "Variables",
//     content: "pacvoevk evk erlvwrkv rv j",
//     module_id: 1,
//   });
// });

// UsersModules.sync({ force: true }).then(function () {
//   return UsersModules.create({
//     user_id: 1,
//     module_id: 1,
//   });
// });

// Checklists.sync({ force: true }).then(function () {
//   return Checklists.create({
//     title: "Чек-лист №1",
//     module_id: 1,
//   });
// });

// themesChecklist.sync({ force: true }).then(function () {
//   return themesChecklist.create({
//     checklist_id: 1,
//     theme_id: 1,
//   });
// });



const _models = {
  Checklists,
  Modules,
  SocialNetworks,
  Statuses,
  Tasks,
  Themes,
  themesChecklist,
  Users,
  UsersModules,
  UserTasks,
};

module.exports = _models;
