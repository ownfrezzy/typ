const UsersModulesServices = require("../services/usersModulesServices.js");

class UsersModulesControllers {
  async getTasks(id) {
    const tasks = await UsersModulesServices.getTasks(id);
    return tasks;
  }

  async addTask(body) {
    const result = await UsersModulesServices.addTask(body);
    return result;
  }

  async updateTask(id, body) {
    const result = await UsersModulesServices.updateTask(id, body);
    return result;
  }

  async deleteTask(id) {
    const result = await UsersModulesServices.deleteTask(id);
    return result;
  }
}

module.exports = new UsersModulesControllers();
