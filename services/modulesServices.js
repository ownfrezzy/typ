const { Users, Modules, SocialNetworks } = require("../models/_models");

class ModulesServices {
  addModule(body) {
    return new Promise((res) => {
      const module = Modules.create(body);
      res(module);
    });
  }

  getModules() {
    return new Promise((res) => {
      Modules.findAll().then((result) => res(result));
    });
  }

  deleteModule(id) {
    return new Promise((res) => {
      Modules.destroy({ where: { id } }).then((result) => res(result));
    });
  }

  //сделать чтобы возвращало обновленный объект
  updateModule(id, body) {
    return new Promise((res) => {
      Modules.update(body, { where: { id } }).then((result) => res(result));
    });
  }
}

module.exports = new ModulesServices();
