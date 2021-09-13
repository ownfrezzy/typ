const taskServices = require("../services/taskServices");

class TaskControllers {
  async getTasks(id) {
    const tasks = await taskServices.getTasks(id);
    return tasks;
  }

  async getAllTasks() {
    const tasks = await taskServices.getAllTasks();
    return tasks;
  }

  async addTask(body) {
    const result = await taskServices.addTask(body);
    return result;
  }

  async updateTask(id, body) {
    const result = await taskServices.updateTask(id, body);
    return result;
  }

  async deleteTask(id) {
    const result = await taskServices.deleteTask(id);
    return result;
  }
}

module.exports = new TaskControllers();
