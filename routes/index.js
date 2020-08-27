const router = require("express").Router();
const {
  getControllers,
  postControllers,
  putControllers,
} = require("../controllers");

router.get("/questions/:pid", getControllers.getQuestions);

router.get("/questions/:qid/answers", getControllers.getAnswers);

router.post("/questions", postControllers.postQuestions);

router.post("/questions/:qid/answers", postControllers.postAnswers);

router.put("/questions/:qid/helpful", putControllers.putHelpfulQ);

router.put("/questions/:qid/report", putControllers.putReportQ);

router.put("/answers/:aid/helpful", putControllers.putHelpfulA);

router.put("/answers/:aid/report", putControllers.putReportA);

module.exports = router;

// router.get = (req, res) => {
//   // res.send('TESTTTT');
//   db.query('SELECT * FROM questions WHERE product_id = 4')
//   .then((data) => {
//     // console.log(data.rows);
//     res.send(data.rows);
//   })
//   .catch((err) => {
//     console.error(err);
//     res.sendStatus(501);
//   })
// }