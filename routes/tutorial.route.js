var express = require("express");
const tutorials = require("../controllers/tutorial.controller.js");
var router = express.Router();

// Create a new Tutorial
router.post("/create", tutorials.create);

// Retrieve all Tutorials
router.get("/findAll", tutorials.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", tutorials.findByTutorialId);

router.get("/title/:title", tutorials.findByTitle);

// Update a Tutorial with id
router.put("/:id", tutorials.update);

// Delete a Tutorial with id
router.delete("/:id", tutorials.delete);

// Delete all Tutorials
router.delete("/deleteAll", tutorials.deleteAll);

module.exports = router;
