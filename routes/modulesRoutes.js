const express = require("express");
const router = express.Router();
const ModulesControllers = require("../controllers/modulesControllers");

/**
 * @swagger
 * /api/modules:
 *  get:
 *      summary: Get all modules
 *      description: Get all modules
 *      tags:
 *          - Modules
 *      responses:
 *          '200':
 *              description: Successfull response
 */
router.get("/", async (req, res) => {
  try {
    const modules = await ModulesControllers.getModules();
    res.send(modules);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 *  /api/modules:
 *    post:
 *      summary: Create new module
 *      description:
 *          Add new module
 *      tags:
 *          - Modules
 *      parameters:
 *        - in: body
 *          name: Modules
 *          required: true
 *          description: Module object to create
 *          schema:
 *              $ref: '#/definitions/Modules'
 *      responses:
 *        200:
 *          description: Successful response
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "Module added succesfully"
 *        500:
 *          description: Error
 *          schema:
 *            type: string
 *            example: "Could not add Modules"
 */
router.post("/", async (req, res) => {
  try {
    const module = await ModulesControllers.addModule(req.body);
    res.send(module);
  } catch (err) {
    res.send(err);
  }
});
/**
 * @swagger
 * /api/modules/{id}:
 *  put:
 *      summary: Update module with {id}
 *      tags:
 *        - Modules
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a module to update
 *          type: integer
 *        - in: body
 *          name: Modules
 *          required: true
 *          description: Updated module
 *          schema:
 *              $ref: '#/definitions/Modules'
 *      responses:
 *          '200':
 *              description: Successful response
 * definitions:
 *  Modules:
 *      type: object
 *      required:
 *          - title
 *          - color
 *      properties:
 *          title:
 *              type: string
 *          color:
 *              type: string
 */
router.put("/:id", async (req, res) => {
  try {
    const result = await ModulesControllers.updateModule(req.params.id, req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/modules/{id}:
 *  delete:
 *      summary: Delete module with {id}
 *      tags:
 *        - Modules
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a module to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successful response
 */

router.delete("/:id", async (req, res) => {
  try {
    const result = await ModulesControllers.deleteModule(req.params.id);
    res.send('vse ok');
  } catch (err) {
    res.send('Something gone wrong');
  }
});

module.exports = router;
