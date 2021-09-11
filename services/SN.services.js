const { Users, Modules, SocialNetworks } = require("../models/_models");

class SNServices {
  addSN(body) {
    return new Promise((res) => {
      const result = SocialNetworks.create(body);
      res(result);
    });
  }

  getSN(id) {
    return new Promise((res) => {
      const SN = SocialNetworks.findOne({
        where: {
          user_id: id,
        },
      });
      res(SN);
    });
  }

  //сделать, чтобы возвращало обновленный объект
  updateSN(id, body) {
    return new Promise((res) => {
      const { instagram, telegram } = body;
      const SN = SocialNetworks.update(
        {
          instagram,
          telegram,
        },
        {
          where: {
            user_id: id,
          },
        }
      );
      res(SN);
    });
  }

  deleteSN(id) {
      return new Promise ((res) => {
          const result = SocialNetworks.destroy({where: {id}})
          res(result)
      })
  }
}

module.exports = new SNServices();
