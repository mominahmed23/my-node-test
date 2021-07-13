const express = require("express");
const app = express();
let port = process.env.PORT || 5000;

app.use(express.json());

app.get("/url", (req, res) => {
  res.send("hello");
});

app.listen(port);
