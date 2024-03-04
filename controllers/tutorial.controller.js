const Tutorial = require("../models/tutorial.model.js");
const { asyncHandler } = require("../utils.js");

exports.create = asyncHandler(async (req, res) => {
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false,
  });

  const data = await Tutorial.create(tutorial);
  return res.send(data);
});

exports.findByTutorialId = asyncHandler(async (req, res) => {
  let tutorialId = req.params.id;
  const data = await Tutorial.queryByTutorialId(tutorialId);
  return res.send(data);
});

exports.findAll = asyncHandler(async (req, res) => {
  const data = await Tutorial.queryAll();
  res.send(data);
});

exports.findByTitle = asyncHandler(async (req, res) => {
  const title = req.params.title;
  const data = await Tutorial.queryByTitle(title);
  return res.send(data);
});

exports.findAllPublished = asyncHandler(async (req, res) => {
  const data = await Tutorial.queryAllPublished();
  return res.send(data);
});

exports.update = asyncHandler(async (req, res) => {
  const tutorial = new Tutorial(req.body);
  const tutorialId = req.params.id;
  const data = await Tutorial.updateByTutorialId(tutorial, tutorialId);
  return res.send(data);
});

exports.delete = asyncHandler(async (req, res) => {
  let tutorialId = req.params.id;
  const data = await Tutorial.deleteByTutorialId(tutorialId);
  return res.send(data);
});
