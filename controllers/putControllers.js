module.exports.putHelpfulQ = (req, res) => {
  console.log('---Triggered putHelpfulQ controller w/ qid of : ', req.params.qid);
  res.sendStatus(500);
}

module.exports.putReportQ = (req, res) => {
  console.log('---Triggered putReportQ controller w/ qid of : ', req.params.qid);
  res.sendStatus(500);
}

module.exports.putHelpfulA = (req, res) => {
  console.log('---Triggered putHelpfulA controller w/ aid of : ', req.params.aid)
  res.sendStatus(500);
}

module.exports.putReportA = (req, res) => {
  console.log('---Triggered putReportA controller w/ aid of : ', req.params.aid)
  res.sendStatus(500);
}