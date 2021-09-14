const ModulesServices = require("../services/modulesServices");

class ModulesControllers {
    async getModules() {
      const result = await ModulesServices.getModules();
      return result;
    }
  
    async addModule(body) {
      const result = await ModulesServices.addModule(body);
      return result;
    }
  
    async updateModule(id, body) {
      const result = await ModulesServices.updateModule(id, body);
      return result;
    }
  
    async deleteModule(id) {
      const result = await ModulesServices.deleteModule(id);
      return result;
    }
  
  }
  
  module.exports = new ModulesControllers();
  