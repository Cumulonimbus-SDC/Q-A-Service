const db = require("../db");

module.exports = {
  writeQuestion: function (body, name, email, pid) {
    console.log("models.writeQuestion triggered");
    let fullDate = new Date();
    fullDate.setDate(fullDate.getDate() + 20);
    let formattedDateStr =
      fullDate.getFullYear() +
      "-" +
      ("0" + (fullDate.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + fullDate.getDate()).slice(-2);
    return db.query(
      "INSERT INTO questions (id, product_id, body, date_written, asker_name, asker_email) VALUES (DEFAULT, $1, $2, $3, $4, $5)",
      [pid, body, formattedDateStr, name, email]
    );
  },
  writeAnswer: function (qid, body, name, email) {
    console.log("models.writeAnswer triggered");
    let fullDate = new Date();
    fullDate.setDate(fullDate.getDate() + 20);
    let formattedDateStr =
      fullDate.getFullYear() +
      "-" +
      ("0" + (fullDate.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + fullDate.getDate()).slice(-2);
    return db.query(
      "INSERT INTO answers (id, question_id, body, date_written, answerer_name, answerer_email) VALUES (DEFAULT, $1, $2, $3, $4, $5) RETURNING id",
      [qid, body, formattedDateStr, name, email]
    );
  },
  writePhotos: function (aid, photo) {
    return db.query(
      `INSERT INTO photos (id, answer_id, url) VALUES (DEFAULT, $1, $2)`,
      [aid, photo]
    );
  },
};
