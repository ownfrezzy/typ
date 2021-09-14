const express = require("express");
const router = express.Router();
const checklistsControllers = require("../controllers/checklistsControllers.js");

/**
 * @swagger
 * /api/checklists:
 *  get:
 *      summary: Get all checklists
 *      description: Returns all checklists from DB
 *      tags:
 *          - Checklists
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/", async (req, res) => {
  try {
    const checklists = await checklistsControllers.getChecklists();
    res.send(checklists);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/checklists/{id}:
 *  get:
 *      summary: Get Checklist with {id}
 *      tags:
 *        - Checklists
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of Checklist
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/:id", async (req, res) => {
  try {
    const checklist = await checklistsControllers.getChecklistById(
      req.params.id
    );
    res.send(checklist);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 *  /api/checklists:
 *    post:
 *      summary: Add new checklists
 *      description:
 *          Register 'Checklist' object.
 *      tags:
 *          - Checklists
 *      parameters:
 *        - name: Checklist
 *          in: body
 *          description: Checklist object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Checklists'
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
 *   Checklists:
 *     description: Checklists object
 *     properties:
 *       title:
 *         type: string
 *         example: number one
 *         description: Name of a checklist
 *       module_id:
 *         type: integer
 *         example: 1
 *         description: id of a module
 *     required:
 *      - title
 *      - module_id
 */

router.post("/", async (req, res) => {
  try {
    const checklist = await checklistsControllers.addChecklist(req.body);
    res.send(checklist);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/checklists/{id}:
 *  put:
 *      summary: Updates a Checklist with {id}
 *      tags:
 *        - Checklists
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a Checklist to update
 *          type: integer
 *        - in: body
 *          name: Checklists
 *          required: true
 *          description: Object to update
 *          schema:
 *              $ref: '#/definitions/Checklists'
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.put("/:id", async (req, res) => {
  try {
    const updatedChecklist = await checklistsControllers.updateChecklist(
      req.params.id,
      req.body
    );
    res.send(updatedChecklist);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/Checklists/{id}:
 *  delete:
 *      summary: Delete Checklist with {id}
 *      tags:
 *        - Checklists
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of Checklists to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    await checklistsControllers.deleteChecklist(req.params.id);
    res.send("checklist deleted");
  } catch (err) {
    res.send("something gone wrong");
  }
});

module.exports = router;
