const express = require("express");
const router = express.Router();
const SNControllers = require("../controllers/SNControllers");

/**
 * @swagger
 * /api/socialNetworks/{id}:
 *  get:
 *      summary: Get all SN of user with {id}
 *      description: Get all social networks from user {id}
 *      tags:
 *          - SocialNetworks
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a user
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SNControllers.getSN(id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 *  /api/socialNetworks:
 *    post:
 *      summary: Add social networks to user with {id}
 *      description:
 *          Add 'socialNetworks' object.
 *      tags:
 *          - SocialNetworks
 *      parameters:
 *        - in: body
 *          name: SocialNetworks
 *          required: true
 *          description: Object to add
 *          schema:
 *              $ref: '#/definitions/SocialNetworks'
 *      responses:
 *        200:
 *          description: Successful response
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "socialNetworks added succesfully"
 *        500:
 *          description: Error
 *          schema:
 *            type: string
 *            example: "Could not add Section"
 */

router.post("/", async (req, res) => {
  try {
    const result = await SNControllers.addSN(req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/socialNetworks/{id}:
 *  put:
 *      summary: Update social network of user with {id}
 *      tags:
 *        - SocialNetworks
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: User {id} to update social networks
 *          type: integer
 *        - in: body
 *          name: SocialNetworks
 *          required: true
 *          description: New social networks
 *          schema:
 *              $ref: '#/definitions/SocialNetworks'
 *      responses:
 *          '200':
 *              description: Successfull response
 * definitions:
 *  SocialNetworks:
 *      type: object
 *      required:
 *          - instagram
 *          - telegram
 *          - userId
 *      properties:
 *          instagram:
 *              type: string
 *          user_id:
 *              type: integer
 *          telegram:
 *              type: string
 */

router.put("/:id", async (req, res) => {
  try {
    const result = await SNControllers.updateSN(req.params.id, req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

/**
 * @swagger
 * /api/socialNetworks/{id}:
 *  delete:
 *      summary: Delete social networks with {id}
 *      tags:
 *        - SocialNetworks
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of SN to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.delete("/:id", async (req, res) => {
  try {
    const result = await SNControllers.deleteSN(req.params.id);
    res.send("Success");
  } catch (err) {
    res.send("Something gone wrong");
  }
});

module.exports = router;
