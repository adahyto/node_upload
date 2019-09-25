const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const upload = require("express-fileupload");
const port = 3020;

const { mongoDbUrl } = require("./config/database");
mongoose
  .connect(mongoDbUrl, { useNewUrlParser: true })
  .then(db => {
    console.log(`${mongoDbUrl} connected`);
  })
  .catch(error => console.log(error));

app.use(express.static(path.join(__dirname, "public")));

app.use(upload());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

const home = require("./routes/home/index");
app.use("/", home);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
