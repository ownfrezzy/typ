const express = require("express");
const router = express.Router();
const TCControllers = require("../controllers/TCControllers.js");

/**
 * @swagger
 * /api/themesChecklists:
 *  get:
 *      summary: Get all themesChecklists
 *      description: Returns all themesChecklists from DB
 *      tags:
 *          - ThemesChecklists
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/", async (req, res) => {
  try {
    const themesChecklists = await TCControllers.getTC();
    res.send(themesChecklists);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/themesChecklists/{id}:
 *  get:
 *      summary: Get themesChecklists from checklist with {id}
 *      tags:
 *        - ThemesChecklists
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of a checklist
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/:id", async (req, res) => {
  try {
    const themesChecklist = await TCControllers.getTCById(req.params.id);
    res.send(themesChecklist);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 *  /api/themesChecklists:
 *    post:
 *      summary: Add new themesChecklist
 *      description:
 *          Register 'ThemesChecklist' object.
 *      tags:
 *          - ThemesChecklists
 *      parameters:
 *        - name: themesChecklist
 *          in: body
 *          description: themesChecklist object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/ThemesChecklist'
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
 *   ThemesChecklist:
 *     description: ThemesChecklist object
 *     properties:
 *       checklist_id:
 *         type: integer
 *         example: 1
 *         description: checklist {id}
 *       theme_id:
 *         type: integer
 *         example: 1
 *         description: theme {id}
 *     required:
 *      - checklist_id
 *      - theme_id
 */

router.post("/", async (req, res) => {
  try {
    const themesChecklist = await TCControllers.addTC(req.body);
    res.send(themesChecklist);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/themesChecklists/{id}:
 *  put:
 *      summary: Updates a themesChecklist with {id}
 *      tags:
 *        - ThemesChecklists
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a themesChecklist to update
 *          type: integer
 *        - in: body
 *          name: ThemesChecklist
 *          required: true
 *          description: Object to update
 *          schema:
 *              $ref: '#/definitions/ThemesChecklist'
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.put("/:id", async (req, res) => {
  try {
    const themesChecklist = await TCControllers.updateTC(
      req.params.id,
      req.body
    );
    res.send(themesChecklist);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/themesChecklists/{id}:
 *  delete:
 *      summary: Delete themesChecklist with {id}
 *      tags:
 *        - ThemesChecklists
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of themesChecklist to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    await TCControllers.deleteTC(req.params.id);
    res.send("Object deleted");
  } catch (err) {
    res.send("something gone wrong");
  }
});

module.exports = router;
