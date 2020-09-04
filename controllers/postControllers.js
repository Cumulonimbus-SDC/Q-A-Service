const { writes } = require("../models");
module.exports.postQuestions = (req, res) => {
  writes
    .writeQuestion(
      req.body.body,
      req.body.name,
      req.body.email,
      req.body.product_id
    )
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports.postAnswers = (req, res) => {
  writes
    .writeAnswer(req.params.qid, req.body.body, req.body.name, req.body.email)
    .then((data) => {
      if (req.body.photos) {
        req.body.photos.forEach((photo) => {
          writes.writePhotos(data.rows[0].id, photo);
        });
      }
    })
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
