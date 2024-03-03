const Tutorial = require("../models/tutorial.model.js");

exports.create = async (req, res) => {
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false,
  });

  try {
    const data = await Tutorial.create(tutorial);
    return res.send(data);
  } catch (err) {
    next(err);
  }
};

exports.findByTutorialId = async (req, res) => {
  let tutorialId = req.params.id;
  try {
    const data = await Tutorial.queryByTutorialId(tutorialId);
    return res.send(data);
  } catch (err) {
    next(err);
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Tutorial.queryAll();
    return res.send(data);
  } catch (err) {
    next(err);
  }
};

exports.findByTitle = async (req, res) => {
  const title = req.params.title;
  try {
    const data = await Tutorial.queryByTitle(title);
    return res.send(data);
  } catch (err) {
    next(err);
  }
};

exports.findAllPublished = async (req, res) => {
  try {
    const data = await Tutorial.queryAllPublished();
    return res.send(data);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res) => {
  const tutorial = new Tutorial(req.body);
  const tutorialId = req.params.id;
  try {
    const data = await Tutorial.updateByTutorialId(tutorial, tutorialId);
    return res.send(data);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res) => {
  let tutorialId = req.params.id;
  try {
    const data = await Tutorial.deleteByTutorialId(tutorialId);
    return res.send(data);
  } catch (err) {
    next(err);
  }
};
