const db = require("../db");

module.exports = {
  reportQuestion: function (qid) {
    console.log("models.reportQuestion triggered");
  },
  reportAnswer: function (aid) {
    console.log("models.reportAnswer triggered");
  },
  helpfulQuestion: function (qid) {
    console.log("models.helpfulQuestion triggered");
  },
  helpfulAnswer: function (aid) {
    console.log("models.helpfulAnswer triggered");
  },
};