const { Checklists } = require("../models/_models");

class UserServices {
  addChecklist(body) {
    return new Promise((res) => {
      const checklist = Checklists.create(body);
      res(checklist);
    });
  }

  getChecklists() {
    return new Promise((res) => {
      Checklists.findAll().then((result) => res(result));
    });
  }

  deleteChecklist(id) {
    return new Promise((res) => {
      Checklists.destroy({ where: { id } }).then((result) => res(result));
    });
  }

  //сделать, чтобы возвращало обновленный объект
  updateChecklist(id, body) {
    return new Promise((res) => {
      Checklists.update(body, { where: { id } }).then((result) => res(result));
    });
  }

  getChecklistById(id) {
    return new Promise((res) => {
      Checklists.findOne({
        where: { id },
      }).then((result) => res(result));
    });
  }
}

module.exports = new UserServices();
