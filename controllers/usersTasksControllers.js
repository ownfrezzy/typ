const UsersTaskServices = require("../services/usersTaskServices.js");

class UsersTaskControllers {
  async getTasks(id) {
    const tasks = await UsersTaskServices.getTasks(id);
    return tasks;
  }


  async addTask(body) {
    const result = await UsersTaskServices.addTask(body);
    return result;
  }

  async updateTask(id, body) {
    const result = await UsersTaskServices.updateTask(id, body);
    return result;
  }

  async deleteTask(id) {
    const result = await UsersTaskServices.deleteTask(id);
    return result;
  }
}

module.exports = new UsersTaskControllers();