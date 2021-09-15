const userServices = require("../services/userServices");

class UserControllers {
  async getUsers() {
    const users = await userServices.getUsers();
    return users;
  }

  async register(body) {
    const user = await userServices.register(body);
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

  async login(body) {
    const token = await userServices.login(body);
    return token;
  }
}

module.exports = new UserControllers();
