const { Users, Modules, SocialNetworks } = require("../models/_models");

class UserServices {
  addUser(body) {
    return new Promise((res) => {
      const newUser = Users.create(body);
      res(newUser);
    });
  }

  getUsers() {
    return new Promise((res) => {
      Users.findAll().then((result) => res(result));
    });
  }

  deleteUser(id) {
    Users.destroy({ where: { id } });
  }

  updateUser(id, body) {
    return new Promise((res) => {
      const user = Users.update(body, { where: { id } });
      res(user);
    });
  }

  getUserById(id) {
    return new Promise((res) => {
      Users.findOne({
        where: { id },
      }).then((result) => res(result));
    });
  }
}

module.exports = new UserServices();
