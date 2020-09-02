const { updates } = require("../models");

module.exports.putHelpfulQ = (req, res) => {
  console.log(
    "---Triggered putHelpfulQ controller w/ qid of : ",
    req.params.qid
  );
  updates
    .helpfulQuestion(req.params.qid)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports.putReportQ = (req, res) => {
  console.log(
    "---Triggered putReportQ controller w/ qid of : ",
    req.params.qid
  );
  updates
    .reportQuestion(req.params.qid)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports.putHelpfulA = (req, res) => {
  console.log(
    "---Triggered putHelpfulA controller w/ aid of : ",
    req.params.aid
  );
  updates
    .helpfulAnswer(req.params.aid)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports.putReportA = (req, res) => {
  console.log(
    "---Triggered putReportA controller w/ aid of : ",
    req.params.aid
  );
  updates
    .reportAnswer(req.params.aid)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
