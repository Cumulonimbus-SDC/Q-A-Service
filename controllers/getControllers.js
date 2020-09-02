const { reads } = require("../models");

module.exports.getQuestions = (req, res) => {
  req.query.page = req.query.page || 1;
  req.query.count = req.query.count || 5;
  console.log(
    "---Triggered getQuestions controller with pid, page & count of : ",
    req.params.pid,
    req.query.page,
    req.query.count
  );
  var responseObj = {
    product_id: req.params.pid,
    results: [],
  };
  reads
    .readQuestions(req.params.pid, req.query.page, req.query.count)
    .then((data) => {
      return Promise.all(
        data.rows.map((row) => {
          responseObj.results.push({
            question_id: row.id,
            question_body: row.body,
            question_date: row.date_written,
            asker_name: row.asker_name,
            question_helpfulness: row.helpful,
            reported: row.reported,
            answers: {},
          });
          return reads.readAnswers(row.id);
        })
      );
    })
    .then((answersArr) => {
      answersArr.forEach((answer) => {
        const uniqueBodiesToUrls = {};
        const outputArr = [];
        answer.rows.forEach((row) => {
          if (uniqueBodiesToUrls[row.body] === undefined) {
            uniqueBodiesToUrls[row.body] = [row.url];
          } else {
            uniqueBodiesToUrls[row.body].push(row.url);
          }
        });
        for (let key in uniqueBodiesToUrls) {
          for (let i = 0; i < answer.rows.length; i++) {
            let row = answer.rows[i];
            if (row.body === key) {
              row.url = uniqueBodiesToUrls[key];
              outputArr.push(row);
              break;
            }
          }
        }
        for (let i = 0; i < responseObj.results.length; i++) {
          for (let j = 0; j < outputArr.length; j++) {
            if (Number(responseObj.results[i].question_id) === outputArr[j].question_id) {
              outputArr.forEach((item) => {
                delete item.question_id;
                item.id = Number(item.id);
                responseObj.results[i].answers[item.id] = item;
              })
            }
          }
        }
        
      });
      res.send(responseObj);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports.getAnswers = (req, res) => {
  req.query.page = req.query.page || 1;
  req.query.count = req.query.count || 5;
  console.log(
    "---Triggered getAnswers controller with qid, page & count of : ",
    req.params.qid,
    req.query.page,
    req.query.count
  );
  reads
    .readAnswers(req.params.qid, req.query.page, req.query.count)
    .then((data) => {
      const uniqueBodiesToUrls = {};
      const outputArr = [];
      data.rows.forEach((row) => {
        if (uniqueBodiesToUrls[row.body] === undefined) {
          uniqueBodiesToUrls[row.body] = [row.url];
        } else {
          uniqueBodiesToUrls[row.body].push(row.url);
        }
      });
      for (let key in uniqueBodiesToUrls) {
        for (let i = 0; i < data.rows.length; i++) {
          let row = data.rows[i];
          if (row.body === key) {
            delete row.question_id;
            row.id = Number(row.id);
            row.url = uniqueBodiesToUrls[key];
            outputArr.push(row);
            break;
          }
        }
      }
      const outputObj = {
        question: req.params.qid,
        page: req.query.page,
        count: req.query.count,
        results: outputArr,
      };
      res.send(outputObj);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
