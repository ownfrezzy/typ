const checklistsServices = require("../services/checklistsServices.js");

class ChecklistsControllers {
  async getChecklists() {
    const checklists = await checklistsServices.getChecklists();
    return checklists;
  }

  async addChecklist(body) {
    const checklist = await checklistsServices.addChecklist(body);
    return checklist;
  }

  async updateChecklist(id, body) {
    const checklist = await checklistsServices.updateChecklist(id, body);
    return checklist;
  }

  async deleteChecklist(id) {
    const result = await checklistsServices.deleteChecklist(id);
    return result;
  }

  async getChecklistById(id) {
    const checklist = await checklistsServices.getChecklistById(id);
    return checklist;
  }
}

module.exports = new ChecklistsControllers();
