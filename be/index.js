const express = require("express");
const messages = [];

const app = express();

app.use(express.json());

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages", (req, res) => {
  messages.push(req.body);
  res.sendStatus(200);
});

app.use(express.static("../fe/public"));

app.listen(8000);
