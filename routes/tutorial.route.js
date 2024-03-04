var express = require("express");
const tutorials = require("../controllers/tutorial.controller.js");
const { asyncHandler } = require("../utils.js");
var router = express.Router();

router.post("/create", asyncHandler(tutorials.create));

router.get("/findByTutorialId/:id", asyncHandler(tutorials.findByTutorialId));

router.get("/findAll", asyncHandler(tutorials.findAll));

router.get("/title/:title", asyncHandler(tutorials.findByTitle));

router.get("/published", asyncHandler(tutorials.findAllPublished));

router.put("/update/:id", asyncHandler(tutorials.update));

router.delete("/delete/:id", asyncHandler(tutorials.delete));

module.exports = router;
