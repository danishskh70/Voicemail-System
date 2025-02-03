const mongoose = require("mongoose");

const voicemailSchema = new mongoose.Schema({
  caller: String,
  recordingUrl: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Voicemail", voicemailSchema);