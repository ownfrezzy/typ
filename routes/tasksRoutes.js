const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");

/**
 * @swagger
 * /api/tasks:
 *  get:
 *      summary: Get all tasks
 *      description: Get all tasks
 *      tags:
 *          - Tasks
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/", async (req, res) => {
  try {
    const result = await taskControllers.getAllTasks();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/tasks/{id}:
 *  get:
 *      summary: Get all tasks in module with {id}
 *      description: Get all tasks in module with {id}
 *      tags:
 *          - Tasks
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a module
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await taskControllers.getTasks(id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 *  /api/tasks:
 *    post:
 *      summary: Add new task to module
 *      description:
 *          Add new 'Task' object.
 *      tags:
 *          - Tasks
 *      parameters:
 *        - in: body
 *          name: Task
 *          required: true
 *          description: Object to add
 *          schema:
 *              $ref: '#/definitions/Tasks'
 *      responses:
 *        200:
 *          description: Successful response
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "Task added succesfully"
 *        500:
 *          description: Error
 *          schema:
 *            type: string
 *            example: "Could not add Section"
 */

router.post("/", async (req, res) => {
  try {
    const result = await taskControllers.addTask(req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/tasks/{id}:
 *  put:
 *      summary: Updates task with {id}
 *      tags:
 *        - Tasks
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Task {id} to update
 *          type: integer
 *        - in: body
 *          name: Tasks
 *          required: true
 *          description: New task
 *          schema:
 *              $ref: '#/definitions/Tasks'
 *      responses:
 *          '200':
 *              description: Successfull response
 * definitions:
 *  Tasks:
 *      type: object
 *      required:
 *          - module_id
 *          - title
 *          - description
 *      properties:
 *          module_id:
 *              type: integer
 *          title:
 *              type: string
 *          description:
 *              type: string
 */

router.put("/:id", async (req, res) => {
  try {
    const result = await taskControllers.updateTask(req.params.id, req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/tasks/{id}:
 *  delete:
 *      summary: Delete task with {id}
 *      tags:
 *        - Tasks
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of task to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    const result = await taskControllers.deleteTask(req.params.id);
    res.send("Success");
  } catch (err) {
    res.send("Something gone wrong");
  }
});

module.exports = router;
