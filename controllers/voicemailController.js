const Voicemail = require("../models/voicemail");
const { sendEmailNotification } = require("../services/emailService");
const { sendSmsNotification } = require("../services/smsService");
// const { sendWhatsAppMessage } = require("../services/whatsappService");

exports.handleVoicemail = async (req, res) => {
  console.log("Incoming Twilio Request:", req.body);  // Log request data

  const { From, RecordingUrl } = req.body;

  if (!From || !RecordingUrl) {
    console.error("Error: Missing data from Twilio", req.body);
    return res.status(400).send("Invalid Twilio request");
  }

  const voicemail = new Voicemail({ caller: From, recordingUrl: RecordingUrl });
  await voicemail.save();

  sendEmailNotification(From, RecordingUrl);
  sendSmsNotification(From, RecordingUrl);

  res.send("<Response><Say>Thank you! Your voicemail has been recorded.</Say></Response>");
};
