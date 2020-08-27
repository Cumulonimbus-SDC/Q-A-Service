const db = require("../db");

module.exports = {
  readQuestions: function (pid, page, count) {
      console.log('models.readQuestions triggered');
    },
  readAnswers: function (qid, page, count) {
    console.log('models.readAnswers triggered');
  }
}