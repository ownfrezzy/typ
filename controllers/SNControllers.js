const SNServices = require("../services/SNServices");

class SNControllers {
  async getSN(id) {
    const SN = await SNServices.getSN(id);
    return SN;
  }

  async addSN(body) {
    const result = await SNServices.addSN(body);
    return result;
  }

  async updateSN(id, body) {
    const result = await SNServices.updateSN(id, body);
    return result;
  }

  async deleteSN(id) {
    const result = await SNServices.deleteSN(id);
    return result;
  }
}

module.exports = new SNControllers();
