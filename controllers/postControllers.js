const { writes } = require("../models");
// writeQuestion: function (body, name, email, pid)
module.exports.postQuestions = (req, res) => {
  console.log("---Triggered postQuestions controller w/ body : ", req.body);
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
  console.log(
    "---Triggered postAnswers controller w/ qid & body : ",
    req.params.qid,
    req.body
  );
  writes
    .writeAnswer(req.params.qid, req.body.body, req.body.name, req.body.email)
    .then((data) => {
      console.log(
        "data.rows[0].id returned from writing answer ",
        data.rows[0].id
      );
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
  // if (req.body.photos) {
  //   writes.writePhotos(req.body.photos)
  // }
};
