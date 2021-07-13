const express = require("express");
var cors = require("cors");
const app = express();
let port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/bbtest-auth", (req, res) => {
  res.status(405).json({ error: "GET method not supported." });
});

app.post("/bbtest-auth", (req, res) => {
  const { password } = req.body;
  if (password === "abc123") {
    res.status(200).json({ success: `Login successful at ${Date.now()}.` });
  } else {
    res.status(400).json({ error: "Incorrect password." });
  }
});

app.listen(port);
