const { Themes } = require("../models/_models");

class ThemesServices {
    addTheme(body) {
    return new Promise((res) => {
      const result = Themes.create(body);
      res(result);
    });
  }

  getAllThemes() {
    return new Promise((res) => {
      Themes.findAll().then((result) => res(result));
    });
  }

  getThemes(id) {
    return new Promise((res) => {
      const tasks = Themes.findAll({
        where: {
          module_id: id,
        },
      });
      res(tasks);
    });
  }

  //сделать, чтобы возвращало обновленный объект
  updateTheme(id, body) {
    return new Promise((res) => {
      Themes.update(body, { where: { id } }).then((result) => res(result));
    });
  }

  deleteTheme(id) {
    return new Promise((res) => {
      const result = Themes.destroy({ where: { id } });
      res(result);
    });
  }
}

module.exports = new ThemesServices();
