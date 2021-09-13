const { Statuses } = require("../models/_models");

class StatusesServices {
  addStatus(body) {
    return new Promise((res) => {
      const result = Statuses.create(body);
      res(result);
    });
  }

  getStatuses() {
    return new Promise((res) => {
      Statuses.findAll().then((result) => res(result));
    });
  }

  //сделать, чтобы возвращало обновленный объект
  updateStatus(id, body) {
    return new Promise((res) => {
      Statuses.update(body, { where: { id } }).then((result) => res(result));
    });
  }

  deleteStatus(id) {
    return new Promise((res) => {
      const result = Statuses.destroy({ where: { id } });
      res(result);
    });
  }
}

module.exports = new StatusesServices();
