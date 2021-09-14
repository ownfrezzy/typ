const express = require("express");
const router = express.Router();
const statusesControllers = require("../controllers/statusesControllers.js");

/**
 * @swagger
 * /api/statuses:
 *  get:
 *      summary: Get all statuses
 *      tags:
 *          - Statuses
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/", async (req, res) => {
  try {
    const statuses = await statusesControllers.getStatuses();
    res.send(statuses);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 *  /api/statuses:
 *    post:
 *      summary: Add new status
 *      description:
 *          Add new 'Status' object.
 *      tags:
 *          - Statuses
 *      parameters:
 *        - in: body
 *          name: Task
 *          required: true
 *          description: Object to add
 *          schema:
 *              $ref: '#/definitions/Statuses'
 *      responses:
 *        200:
 *          description: Successful response
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "Status added succesfully"
 *        500:
 *          description: Error
 *          schema:
 *            type: string
 *            example: "Could not add Section"
 */

router.post("/", async (req, res) => {
  try {
    const status = await statusesControllers.addStatus(req.body);
    res.send(status);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/statuses/{id}:
 *  put:
 *      summary: Updates status with {id}
 *      tags:
 *        - Statuses
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Status {id} to update
 *          type: integer
 *        - in: body
 *          name: Tasks
 *          required: true
 *          description: New task
 *          schema:
 *              $ref: '#/definitions/Statuses'
 *      responses:
 *          '200':
 *              description: Successfull response
 * definitions:
 *  Statuses:
 *      type: object
 *      required:
 *          - text
 *      properties:
 *          text:
 *              type: string
 */

router.put("/:id", async (req, res) => {
  try {
    const updatedStatus = await statusesControllers.updateStatus(
      req.params.id,
      req.body
    );
    res.send(updatedStatus);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/statuses/{id}:
 *  delete:
 *      summary: Delete status with {id}
 *      tags:
 *        - Statuses
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of status to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    await statusesControllers.deleteStatus(req.params.id);
    res.send("Status deleted");
  } catch (err) {
    res.send("something gone wrong");
  }
});

module.exports = router;
