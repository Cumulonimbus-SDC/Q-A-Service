const express = require("express");
const app = express();
const port = 9000;
const routes = require('./routes');
const bodyParser = require("body-parser");


// app.get("/", (req, res) => {
//   res.send("You have successfully connected to the Q&A server!");
// });

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}))

app.use("/qa", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
