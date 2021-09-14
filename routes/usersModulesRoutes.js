const express = require("express");
const router = express.Router();
const usersModulesControllers = require('../controllers/userModulesControllers.js')

/**
 * @swagger
 * /api/usersModules/{id}:
 *  get:
 *      summary: Get users {id} modules
 *      tags:
 *        - UsersModules
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of a user
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */


 router.get("/:id", async (req, res) => {
    try {
      const result = await usersModulesControllers.getTasks(req.params.id);
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  });
  
  /**
   * @swagger
   *  /api/usersModules:
   *    post:
   *      summary: Add new UsersModule
   *      description:
   *          Add new UsersModule
   *      tags:
   *          - UsersModules
   *      parameters:
   *        - name: UsersModule
   *          in: body
   *          description: UsersModule object
   *          required: true
   *          schema:
   *            $ref: '#/definitions/UsersModules'
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
   *   UsersModules:
   *     description: UsersModule object
   *     properties:
   *       user_id:
   *         type: integer
   *         example: 1
   *         description: id of a user
   *       module_id:
   *         type: integer
   *         example: 2
   *         description: id of a module
   *     required:
   *      - user_id
   *      - task_id
   *      - module_id
   */
  
  router.post("/", async (req, res) => {
    try {
      const result = await usersModulesControllers.addTask(req.body);
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  });
  
  /**
   * @swagger
   * /api/usersModules/{id}:
   *  put:
   *      summary: Updates a UsersModule with {id}
   *      tags:
   *        - UsersModules
   *      consumes:
   *        - application/json
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          description: Set an {id} of a UsersModule to update
   *          type: integer
   *        - in: body
   *          name: UsersModule
   *          required: true
   *          description: Object to update
   *          schema:
   *              $ref: '#/definitions/UsersModules'
   *      responses:
   *          '200':
   *              description: Successfull response
   */
  
  router.put("/:id", async (req, res) => {
    try {
      const result = await usersModulesControllers.updateTask(req.params.id, req.body);
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  });
  
  /**
   * @swagger
   * /api/usersModules/{id}:
   *  delete:
   *      summary: Delete UsersModule with {id}
   *      tags:
   *        - UsersModules
   *      consumes:
   *        - application/json
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          description: id of UsersModule to delete
   *          type: integer
   *      responses:
   *          '200':
   *              description: Successfull response
   */
  
  router.delete("/:id", async (req, res) => {
    try {
      const result = await usersModulesControllers.deleteTask(req.params.id);
      res.send("Success");
    } catch (err) {
      res.send("Something gone wrong");
    }
  });
  


module.exports = router;