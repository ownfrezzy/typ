const { themesChecklist } = require("../models/_models");

class UserServices {
  addTC(body) {
    return new Promise((res) => {
      const newUser = themesChecklist.create(body);
      res(newUser);
    });
  }

  getTC() {
    return new Promise((res) => {
        themesChecklist.findAll().then((result) => res(result));
    });
  }

  deleteTC(id) {
    return new Promise((res) => {
        themesChecklist.destroy({ where: { id } }).then((result) => res(result));
    });
  }

  //сделать, чтобы возвращало обновленный объект
  updateTC(id, body) {
    return new Promise((res) => {
        themesChecklist.update(body, { where: { id } }).then((result) =>
        res(result)
      );
    });
  }

  getTCById(id) {
    return new Promise((res) => {
        themesChecklist.findOne({
        where: { checklist_id: id },
      }).then((result) => res(result));
    });
  }
}

module.exports = new UserServices();
