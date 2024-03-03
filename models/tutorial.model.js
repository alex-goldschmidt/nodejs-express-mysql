const db = require("./db.js");

class Tutorial {
  constructor(tutorial) {
    this.title = tutorial.title;
    this.description = tutorial.description;
    this.published = tutorial.published;
  }

  static async create(newTutorial) {
    const [result] = await db.query("INSERT INTO tutorials SET ?", [
      newTutorial,
    ]);
    return { id: result.insertId, ...newTutorial };
  }

  static async queryByTutorialId(tutorialId) {
    const [result] = await db.query(
      "SELECT * FROM tutorials WHERE tutorialId = ?",
      [tutorialId]
    );
    return result[0];
  }

  static async queryAll() {
    const [rows] = await db.query("SELECT * FROM tutorials");
    return rows;
  }

  static async queryByTitle(title) {
    const [result] = await db.query("SELECT * FROM tutorials WHERE title = ?", [
      title,
    ]);
    return result[0];
  }

  static async queryAllPublished() {
    const [rows] = await db.query(
      "SELECT * FROM tutorials WHERE published = 1"
    );
    return rows;
  }

  static async updateByTutorialId(tutorial, tutorialId) {
    const [rows] = await db.query(
      "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE tutorialId = ?",
      [tutorial.title, tutorial.description, tutorial.published, tutorialId]
    );
    return rows;
  }

  static async deleteByTutorialId(tutorialId) {
    const [result] = await db.query(
      "DELETE FROM tutorials WHERE tutorialId = ?",
      [tutorialId]
    );
    return result[0];
  }
}

module.exports = Tutorial;
