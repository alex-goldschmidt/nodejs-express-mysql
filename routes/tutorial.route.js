var express = require("express");
const tutorials = require("../controllers/tutorial.controller.js");
var router = express.Router();

router.post("/create", async (req, res, next) => {
  try {
    await tutorials.create(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/findByTutorialId/:id", async (req, res, next) => {
  try {
    await tutorials.findByTutorialId(req, res);
  } catch (error) {
    next(error);
  }
});

// Retrieve all Tutorials
router.get("/findAll", tutorials.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);

router.get("/title/:title", tutorials.findByTitle);

// Update a Tutorial with id
router.put("/:id", tutorials.update);

// Delete a Tutorial with id
router.delete("/:id", tutorials.delete);

// Delete all Tutorials
router.delete("/deleteAll", tutorials.deleteAll);

module.exports = router;
