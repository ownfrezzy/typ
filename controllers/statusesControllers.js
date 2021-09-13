const StatusesServices = require("../services/statusesServices.js");

class StatusesControllers {
  async getStatuses() {
    const statuses = await StatusesServices.getStatuses();
    return statuses;
  }

  async addStatus(body) {
    const result = await StatusesServices.addStatus(body);
    return result;
  }

  async updateStatus(id, body) {
    const result = await StatusesServices.updateStatus(id, body);
    return result;
  }

  async deleteStatus(id) {
    const result = await StatusesServices.deleteStatus(id);
    return result;
  }
}

module.exports = new StatusesControllers();
