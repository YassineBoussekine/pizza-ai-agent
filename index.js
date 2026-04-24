require("dotenv").config();
const express = require("express");
const twilio = require("twilio");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Pizza AI Agent is running 🚀");
});

// 🔥 ROUTE TWILIO
app.post("/voice", (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say("Bonjour, bienvenue chez la pizzeria. Comment puis-je vous aider ?");

  res.type("text/xml");
  res.send(twiml.toString());
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});