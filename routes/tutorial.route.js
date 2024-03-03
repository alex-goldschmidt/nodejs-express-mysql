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

router.get("/findAll", async (req, res, next) => {
  try {
    await tutorials.findAll(req, res);
  } catch (error) {
    next(error);
  }
});

router.get("/title/:title", async (req, res, next) => {
  try {
    await tutorials.findByTitle(req, res);
  } catch (error) {
    next(error);
  }
});

// Retrieve all published Tutorials
router.get("/published", async (req, res, next) => {
  try {
    await tutorials.findAllPublished(req, res);
  } catch (error) {
    next(error);
  }
});

// Update a Tutorial with id
router.put("/update/:id", async (req, res, next) => {
  try {
    await tutorials.update(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    await tutorials.delete(req, res);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
