const mongoose = require("mongoose");

const mailSchema = new mongoose.Schema({
  from: { type: String, required: true },
  fromEmail: { type: String, required: true },
  to: { type: String, required: true },
  cc: { type: String, required: true },
  subject: { type: String, required: true },
  text: { type: String, required: true },
  time: { type: String, required: true },
});

const Mail = mongoose.model("Mail", mailSchema);

module.exports = Mail;