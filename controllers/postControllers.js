module.exports.postQuestions = (req, res) => {
  console.log('---Triggered postQuestions controller w/ body : ', req.body);
  res.sendStatus(500);
}

module.exports.postAnswers = (req, res) => {
  console.log('---Triggered postAnswers controller w/ qid & body : ', req.params.qid, req.body);
  res.sendStatus(500);
}