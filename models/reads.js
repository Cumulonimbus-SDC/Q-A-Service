const db = require("../db");

module.exports = {
  readQuestions: function (pid, page, count) {
    console.log("models.readQuestions triggered");
    return db.query(
      `SELECT q.id, q.body, q.date_written, q.asker_name, q.asker_email, q.reported, q.helpful FROM questions q WHERE q.product_id = $1 AND q.reported = 0`,
      [pid]
    );
  },
  readAnswers: function (qid, page, count) {
    console.log("models.readAnswers triggered");
    return db.query(
      `SELECT a.id, a.question_id, a.body, a.date_written, a.answerer_name, a.answerer_email, a.reported, a.helpful, p.url FROM answers a LEFT JOIN photos p ON a.id = p.answer_id WHERE a.question_id = $1 AND a.reported = 0`,
      [qid]
    );
  },
};
