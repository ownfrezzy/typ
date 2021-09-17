const { Users, Modules, SocialNetworks } = require("../models/_models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const salt = 5;
const generateAceessToken = (login, id, isAdmin) => {
  const payload = {
    id,
    login,
    isAdmin,
  };
  return jwt.sign(payload, process.env.SECRET_PHRASE);
};

class UserServices {
  async register(body) {
    try {
      let { login, password, firstName, lastName, isAdmin } = body;
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log(hashedPassword);
      return new Promise(async (res) => {
        let candidate = await Users.findOne({ where: { login } }).then();
        if (candidate) {
          res("User with this login already exists");
        } else {
          const newUser = Users.create({ ...body, password: hashedPassword });
          res(newUser);
        }
      });
    } catch {
      if (err) throw err;
    }
  }

  getUsers() {
    return new Promise((res) => {
      Users.findAll().then((result) => res(result));
    });
  }

  deleteUser(id) {
    return new Promise((res) => {
      Users.destroy({ where: { id } }).then((result) => res(result));
    });
  }

  //сделать, чтобы возвращало обновленный объект. DONE!
  updateUser(id, body) {
    return new Promise(async (res) => {
      await Users.update(body, { where: { id } });
      await Users.findOne({
        where:{id}
      }).then(result => res(result))
    });
  }

  getUserById(id) {
    return new Promise((res) => {
      try {
        const user = Users.findOne({
          where: { id },
        }).then((result) => res(result));
      } catch {
        if (err) throw err;
      }
    });
  }

  async login(body) {
    return new Promise(async (res, rej) => {
      const { login, password } = body;
      const user = await Users.findOne({
        where: { login },
      });
      if (!user) {
        res("User undefined");
      } else {
        console.log(user.dataValues.password);
        const validPassword = bcrypt.compare(
          password,
          user.dataValues.password,
          function (err, result) {
            if (result) {
              const token = generateAceessToken(
                login,
                user.dataValues.id,
                user.dataValues.isAdmin
              );
              res(token);
            } else {
              rej("wrong password");
            }
          }
        );
      }
    });
  }
}

module.exports = new UserServices();
