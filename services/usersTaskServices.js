const { UserTasks } = require("../models/_models");

class TaskServices {
  addTask(body) {
    return new Promise((res) => {
      const result = UserTasks.create(body);
      res(result);
    });
  }

  getTasks(id) {
    return new Promise((res) => {
      UserTasks.findAll({ where: { user_id: id } }).then((result) =>
        res(result)
      );
    });
  }

  //сделать, чтобы возвращало обновленный объект
  updateTask(id, body) {
    return new Promise((res) => {
      UserTasks.update(body, { where: { id } }).then((result) => res(result));
    });
  }

  deleteTask(id) {
    return new Promise((res) => {
      const result = UserTasks.destroy({ where: { id } });
      res(result);
    });
  }
}

module.exports = new TaskServices();
