const express = require("express");
const app = express();
const port = 9000;
const routes = require('./routes');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/qa", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
