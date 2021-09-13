const express = require("express");
const router = express.Router();
const usersTasksControllers = require("../controllers/usersTasksControllers.js");

/**
 * @swagger
 * /api/userTasks/{id}:
 *  get:
 *      summary: Get users {id} tasks
 *      tags:
 *        - UserTasks
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
  try {
    const result = await usersTasksControllers.getTasks(req.params.id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 *  /api/userTasks:
 *    post:
 *      summary: Add new UserTask
 *      description:
 *          Add new UserTask
 *      tags:
 *          - UserTasks
 *      parameters:
 *        - name: UserTask
 *          in: body
 *          description: UserTask object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/UserTasks'
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
 *   UserTasks:
 *     description: UserTasks object
 *     properties:
 *       user_id:
 *         type: integer
 *         example: 1
 *         description: id of a user
 *       task_id:
 *         type: integer
 *         example: 2
 *         description: id of a task
 *       status_id:
 *         type: integer
 *         example: 2
 *         description: id of a status
 *       link_github:
 *         type: string
 *         example: https://github.com/ownfrezzy/todo/blob/master/services/todo.services.js#L38
 *         description: link to github of resolved task
 *     required:
 *      - user_id
 *      - task_id
 *      - status_id
 */

router.post("/", async (req, res) => {
  try {
    const result = await usersTasksControllers.addTask(req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/userTasks/{id}:
 *  put:
 *      summary: Updates a UserTask with {id}
 *      tags:
 *        - UserTasks
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a UserTask to update
 *          type: integer
 *        - in: body
 *          name: UserTask
 *          required: true
 *          description: Object to update
 *          schema:
 *              $ref: '#/definitions/UserTasks'
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.put("/:id", async (req, res) => {
  try {
    const result = await usersTasksControllers.updateTask(req.params.id, req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/userTasks/{id}:
 *  delete:
 *      summary: Delete UserTask with {id}
 *      tags:
 *        - UserTasks
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of UserTask to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    const result = await usersTasksControllers.deleteTask(req.params.id);
    res.send("Success");
  } catch (err) {
    res.send("Something gone wrong");
  }
});

module.exports = router;
