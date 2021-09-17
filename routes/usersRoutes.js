const express = require("express");
const userControllers = require("../controllers/userControllers");
const router = express.Router();
const UserControllers = require("../controllers/userControllers");

/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: Get all users
 *      description: Returns all users from DB
 *      tags:
 *          - Users
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/", async (req, res) => {
  try {
    const users = await UserControllers.getUsers();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      summary: Get user with {id}
 *      tags:
 *        - Users
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of user
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/:id", async (req, res) => {
    const user = await UserControllers.getUserById(req.params.id);
    if (!user) {
      res.sendStatus(404);
    } else {
      res.send(user);
    }
});

/**
 * @swagger
 *  /api/users/register:
 *    post:
 *      summary: Add new user
 *      description:
 *          Register 'User' object.
 *      tags:
 *          - Users
 *      parameters:
 *        - name: user
 *          in: body
 *          description: user object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Users'
 *      responses:
 *        200:
 *          description: Successful response
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "Section added succesfully"
 *        500:
 *          description: Error
 *          schema:
 *            type: string
 *            example: "Could not add Section"
 * definitions:
 *   Users:
 *     description: Users object
 *     properties:
 *       login:
 *         type: string
 *         example: example@example.com
 *         description: login for user
 *       password:
 *         type: string
 *         example: 123123
 *         description: password for user
 *       firstName:
 *         type: string
 *         example: Kiryl
 *         description: name for user
 *       lastName:
 *         type: string
 *         example: Sachuk
 *         description: last name for user
 *       isAdmin:
 *         type: boolean
 *         example: false
 *         description: admin or user
 *     required:
 *      - login
 *      - password
 *      - firstName
 *      - lastName
 *      - isAdmin
 */

router.post("/register", async (req, res) => {
  try {
    const newUser = await UserControllers.register(req.body);
    res.send(newUser);
  } catch (err) {
    res.sendStatus(500);
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      summary: Updates a user with {id}
 *      tags:
 *        - Users
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a user to update
 *          type: integer
 *        - in: body
 *          name: Users
 *          required: true
 *          description: Object to update
 *          schema:
 *              $ref: '#/definitions/Users'
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await UserControllers.updateUser(
      req.params.id,
      req.body
    );
    res.send(updatedUser);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      summary: Delete user with {id}
 *      tags:
 *        - Users
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of user to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await UserControllers.deleteUser(req.params.id);
    res.send("deletedUser");
  } catch (err) {
    res.send("something gone wrong");
  }
});

/**
 * @swagger
 *  /api/users/login:
 *    post:
 *      summary: Login as a user
 *      description:
 *          Login route.
 *      tags:
 *          - Users
 *      parameters:
 *        - name: user
 *          in: body
 *          description: login object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Login'
 *      responses:
 *        200:
 *          description: Successful response
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "Section added succesfully"
 *        500:
 *          description: Error
 *          schema:
 *            type: string
 *            example: "Could not add Section"
 * definitions:
 *   Login:
 *     description: Login object
 *     properties:
 *       login:
 *         type: string
 *         example: example@example.com
 *         description: login for user
 *       password:
 *         type: string
 *         example: 123123
 *         description: password for user
 *     required:
 *      - login
 *      - password
 */

router.use("/login", async (req, res) => {
  try {
    let token = await UserControllers.login(req.body);
    res.send(token);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
