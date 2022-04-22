const express = require("express");
const messages = [];

const app = express();

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages", (req, res) => {
  messages.push(req.body);
});

app.listen(8000);
