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