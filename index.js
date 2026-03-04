const express = require("express");
const app = express();

app.use("/", express.static("./"));

app.get("/home", (res, _) =>
  res.send(require("fs").readFileSync("index.html")),
);

app.listen(3000);
