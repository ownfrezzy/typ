const request = require("supertest");
const app = require("./index.js");
const { Users } = require("./models/_models");
const db = Users;
function deleteLast(database) {
  Users.findOne({
    order: [["createdAt", "DESC"]],
    where: {},
  }).then((user) =>
    Users.destroy({
      where: { id: user.id },
      limit: 1,
    })
  );
}

describe("/api/users/", () => {
  describe("POST /api/users/register => given a proper object", () => {
    afterEach(() => deleteLast(db));
    test("should response with a json object containing the user id", async () => {
      const response = await request(app).post("/api/users/register").send({
        login: "Supertest44",
        password: "Supertest",
        firstName: "Supername",
        lastName: "Superlastname",
        isAdmin: false,
      });
      expect(response.body.id).toBeDefined();
    });
    test("should response with 200 status code", async () => {
      const response = await request(app).post("/api/users/register").send({
        login: "Supertest34",
        password: "Supertest2",
        firstName: "Supername2",
        lastName: "Superlastname",
        isAdmin: false,
      });
      expect(response.statusCode).toBe(200);
    });
  });

  describe("POST /api/users/register => when some kind of information is missing", () => {
    test("should response with 500 statuscode", async () => {
      const response = await request(app).post("/api/users/register").send({
        login: "Supertest",
        lastName: "Superlastname",
        isAdmin: false,
      });
      expect(response.statusCode).toBe(500);
    });
  });

  describe("GET /api/users => successfull response", () => {
    test("should return users object with status 200", async () => {
      const response = await request(app).get("/api/users");
      expect(response.body).toBeDefined();
      expect(response.statusCode).toBe(200);
    });
  });

  describe("GET /api/users/:id => Given a proper ID", () => {
    const id = 1;
    test("should return user from DB with {id}", async () => {
      const response = await request(app).get(`/api/users/${id}`);
      expect(response.body.id).toBe(id);
    });
    test("should respond with object", async () => {
      const response = await request(app).get(`/api/users/${id}`);
      expect(response.body).toBeInstanceOf(Object);
    });
  });

  describe("GET /api/users/:id => Given a wrong ID", () => {
    const id = 999993431;
    test("should response with 404 status code", async () => {
      const response = await request(app).get(`/api/users/${id}`);
      expect(response.statusCode).toBe(404);
    });
  });

  describe("PUT /api/users/ => Given a proper object to update", () => {
    afterEach(() => deleteLast(db));
    const changedbody = {
      login: "CHANGED",
      password: "BY",
      firstName: "SUPERTEST",
      lastName: "Superlastname",
      isAdmin: false,
    };
    test("should update an object", async () => {
      await Users.create({
        login: "SSUPERPUTTEST",
        password: "SUPERPUT",
        firstName: "Supername2",
        lastName: "Superlastname",
        isAdmin: false,
      }).then(async (user) => {
        await request(app).put(`/api/users/${user.id}`).send(changedbody);
      });
      const response = await Users.findOne({
        where: { login: "CHANGED" },
      });
      expect(response.dataValues).toMatchObject(changedbody);
    });
  });
});
