const db = require("../db");

module.exports = {
  writeQuestion: function (body, name, email, pid) {
    console.log("models.writeQuestion triggered");
  },
  writeAnswer: function (qid, body, name, email, photos) {
    console.log("models.writeAnswer triggered");
  },
};
