const db = require("./db.js");

class Tutorial {
  constructor(tutorial) {
    this.title = tutorial.title;
    this.description = tutorial.description;
    this.published = tutorial.published;
  }

  static async create(newTutorial) {
    try {
      const [result] = await db.query("INSERT INTO tutorials SET ?", [
        newTutorial,
      ]);
      return { id: result.insertId, ...newTutorial };
    } catch (error) {
      console.error("Error creating tutorial:", error);
      throw error;
    }
  }

  static queryByTutorialId(tutorialId, result) {
    db.query(
      "SELECT * FROM tutorials WHERE tutorialId = ?",
      [tutorialId],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }

        if (res.length) {
          console.log("found tutorial: ", res[0]);
          result(null, res[0]);
          return;
        }

        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
      }
    );
  }

  static queryAll = (result) => {
    db.query("SELECT * FROM tutorials", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("tutorials: ", res);
      result(null, res); //error
    });
  };

  static queryByTitle = (title, result) => {
    db.query("SELECT * FROM tutorials WHERE title = ?", [title], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found tutorial title: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Tutorial with the title
      result({ kind: "not_found" }, null);
    });
  };

  static queryAllPublished = (result) => {
    db.query("SELECT * FROM tutorials WHERE published = 1", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("tutorials: ", res);
      result(null, res);
    });
  };

  static updateByTutorialId = (tutorialId, tutorial, result) => {
    db.query(
      "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE tutorialId = ?",
      [tutorial.title, tutorial.description, tutorial.published, tutorialId],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          // not found Tutorial with the id
          result({ kind: "not_found" }, null);
          return;
        }

        console.log("updated tutorial: ", { id: tutorialId, ...tutorial });
        result(null, { id: tutorialId, ...tutorial });
      }
    );
  };

  static remove = (tutorialId, result) => {
    db.query(
      "DELETE FROM tutorials WHERE tutorialId = ?",
      [tutorialId],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          // not found Tutorial with the id
          result({ kind: "not_found" }, null);
          return;
        }

        console.log("deleted tutorial with id: ", tutorialId);
        result(null, res);
      }
    );
  };

  static removeAll = (result) => {
    db.query("DELETE FROM tutorials", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log(`deleted ${res.affectedRows} tutorials`);
      result(null, res);
    });
  };
}

module.exports = Tutorial;
