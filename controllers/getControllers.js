module.exports.getQuestions = (req, res) => {
  console.log(
    "---Triggered getQuestions controller with pid, page & count of : ",
    req.params.pid,
    req.query.page,
    req.query.count
  );
  res.sendStatus(500);
};

module.exports.getAnswers = (req, res) => {
  console.log(
    "---Triggered getAnswers controller with qid, page & count of : ",
    req.params.qid,
    req.query.page,
    req.query.count
  );
  res.sendStatus(500);
};
