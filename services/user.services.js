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
      const users = Users.findAll().then((result) => res(result));
    });
  }

  deleteUser(id) {
    const result = Users.destroy({where: {id}})
  }

  updateUser(id, body) {
    return new Promise ((res) => {
      const user = Users.update(body, {where: {id}})
      res(user)
    })
  }
}

module.exports = new UserServices();
