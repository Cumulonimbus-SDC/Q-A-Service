const db = require("../db");

module.exports = {
  reportQuestion: function (qid) {
    return db.query(`UPDATE questions SET reported = 1 WHERE id = $1`, [qid]);
  },
  reportAnswer: function (aid) {
    return db.query(`UPDATE answers SET reported = 1 WHERE id = $1`, [aid]);
  },
  helpfulQuestion: function (qid) {
    return db.query(`UPDATE questions SET helpful = (helpful + 1) WHERE id = $1`, [qid])
  },
  helpfulAnswer: function (aid) {
    return db.query(`UPDATE answers SET helpful = (helpful + 1) WHERE id = $1`, [aid])
  },
};
