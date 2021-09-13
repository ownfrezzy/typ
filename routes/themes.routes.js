const express = require("express");
const router = express.Router();
const themesControllers = require("../controllers/themesControllers.js");

/**
 * @swagger
 * /api/themes:
 *  get:
 *      summary: Get all themes
 *      description: Get all themes
 *      tags:
 *          - Themes
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/", async (req, res) => {
  try {
    const result = await themesControllers.getAllThemes();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/themes/{id}:
 *  get:
 *      summary: Get all themes in module with {id}
 *      description: Get all themes in module with {id}
 *      tags:
 *          - Themes
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
    const result = await themesControllers.getThemes(id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 *  /api/themes:
 *    post:
 *      summary: Add new theme to module
 *      description:
 *          Add new 'Themes' object.
 *      tags:
 *          - Themes
 *      parameters:
 *        - in: body
 *          name: Task
 *          required: true
 *          description: Object to add
 *          schema:
 *              $ref: '#/definitions/Themes'
 *      responses:
 *        200:
 *          description: Successful response
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "Theme added succesfully"
 *        500:
 *          description: Error
 *          schema:
 *            type: string
 *            example: "Could not add Section"
 */

router.post("/", async (req, res) => {
  try {
    const result = await themesControllers.addTheme(req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/themes/{id}:
 *  put:
 *      summary: Updates Theme with {id}
 *      tags:
 *        - Themes
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Theme {id} to update
 *          type: integer
 *        - in: body
 *          name: Themes
 *          required: true
 *          description: New Theme
 *          schema:
 *              $ref: '#/definitions/Themes'
 *      responses:
 *          '200':
 *              description: Successfull response
 * definitions:
 *  Themes:
 *      type: object
 *      required:
 *          - title
 *          - module_id
 *          - content
 *      properties:
 *          title:
 *              type: string
 *          module_id:
 *              type: integer
 *          content:
 *              type: string
 */

// Крашится на ошибке
router.put("/:id", async (req, res) => {
  try {
    const result = await themesControllers.updateTheme(req.params.id, req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/themes/{id}:
 *  delete:
 *      summary: Delete theme with {id}
 *      tags:
 *        - Themes
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of Theme to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    const result = await themesControllers.deleteTheme(req.params.id);
    res.send("Success");
  } catch (err) {
    res.send("Something gone wrong");
  }
});

module.exports = router;
