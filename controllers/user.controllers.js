const userServices = require("../services/user.services");

class UserControllers {
  async getUsers() {
    const users = await userServices.getUsers();
    return users;
  }

  async addUser(body) {
    const user = await userServices.addUser(body);
    return user;
  }

  async updateUser(id, body) {
    const user = await userServices.updateUser(id, body);
    return user;
  }

  async deleteUser(id) {
    const result = await userServices.deleteUser(id);
    return result;
  }

  async getUserById(id) {
    const user = await userServices.getUserById(id);
    return user;
  }
}

module.exports = new UserControllers();
