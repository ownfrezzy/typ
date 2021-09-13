const { Tasks } = require("../models/_models");

class TaskServices {
  addTask(body) {
    return new Promise((res) => {
      const result = Tasks.create(body);
      res(result);
    });
  }

  getAllTasks() {
    return new Promise((res) => {
      Tasks.findAll().then((result) => res(result));
    });
  }

  getTasks(id) {
    return new Promise((res) => {
      const tasks = Tasks.findAll({
        where: {
          module_id: id,
        },
      });
      res(tasks);
    });
  }

  //сделать, чтобы возвращало обновленный объект
  updateTask(id, body) {
    return new Promise((res) => {
    Tasks.update(body, { where: { id } }).then(result => res(result));
    });
  }

  deleteTask(id) {
    return new Promise((res) => {
      const result = Tasks.destroy({ where: { id } });
      res(result);
    });
  }
}

module.exports = new TaskServices();
