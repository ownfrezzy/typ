const { UsersModules } = require("../models/_models");

class UsersModulesServices {
  addTask(body) {
    return new Promise((res) => {
      const result = UsersModules.create(body);
      res(result);
    });
  }

  getTasks(id) {
    return new Promise((res) => {
      UsersModules.findAll({ where: { user_id: id } }).then((result) =>
        res(result)
      );
    });
  }

  //сделать, чтобы возвращало обновленный объект
  updateTask(id, body) {
    return new Promise((res) => {
      UsersModules.update(body, { where: { id } }).then((result) =>
        res(result)
      );
    });
  }

  deleteTask(id) {
    return new Promise((res) => {
      const result = UsersModules.destroy({ where: { id } });
      res(result);
    });
  }
}

module.exports = new UsersModulesServices();
