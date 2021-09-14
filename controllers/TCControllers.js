const TCServices = require("../services/TCServices.js");

class TCControllers {
  async getTC() {
    const result = await TCServices.getTC();
    return result;
  }

  async addTC(body) {
    const result = await TCServices.addTC(body);
    return result;
  }

  async updateTC(id, body) {
    const result = await TCServices.updateTC(id, body);
    return result;
  }

  async deleteTC(id) {
    const result = await TCServices.deleteTC(id);
    return result;
  }

  async getTCById(id) {
    const user = await TCServices.getTCById(id);
    return user;
  }
}

module.exports = new TCControllers();
