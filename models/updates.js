const db = require("../db");

module.exports = {
  reportQuestion: function (qid) {
    console.log("models.reportQuestion triggered");
    return db.query(`UPDATE questions SET reported = 1 WHERE id = $1`, [qid]);
  },
  reportAnswer: function (aid) {
    console.log("models.reportAnswer triggered");
    return db.query(`UPDATE answers SET reported = 1 WHERE id = $1`, [aid]);
  },
  helpfulQuestion: function (qid) {
    console.log("models.helpfulQuestion triggered");
    return db.query(`UPDATE questions SET helpful = (helpful + 1) WHERE id = $1`, [qid])
  },
  helpfulAnswer: function (aid) {
    console.log("models.helpfulAnswer triggered");
    return db.query(`UPDATE answers SET helpful = (helpful + 1) WHERE id = $1`, [aid])
  },
};
