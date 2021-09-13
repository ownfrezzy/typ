const themesServices = require("../services/themesServices.js");

class ThemesControllers {
  async getAllThemes() {
    const theme = await themesServices.getAllThemes();
    return theme;
  }

  async addTheme(body) {
    const theme = await themesServices.addTheme(body);
    return theme;
  }

  async updateTheme(id, body) {
    const theme = await themesServices.updateTheme(id, body);
    return theme;
  }

  async deleteTheme(id) {
    const result = await themesServices.deleteTheme(id);
    return result;
  }

  async getThemes(id) {
    const theme = await themesServices.getThemes(id);
    return theme;
  }
}

module.exports = new ThemesControllers();