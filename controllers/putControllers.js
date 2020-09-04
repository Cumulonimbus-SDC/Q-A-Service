const { updates } = require("../models");

module.exports.putHelpfulQ = (req, res) => {
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
