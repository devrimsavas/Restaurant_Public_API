var express = require("express");
var path = require("path");
var PORT = 3000;
var cors = require("cors");

//an simple pizza order API for general usage

var indexRouter = require("./routes/index.js");

var app = express();

app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, "data")));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`listening at PORT ${PORT}`);
});
