const twilio = require("twilio");
require("dotenv").config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendSmsNotification = (caller, recordingUrl) => {
  const toPhoneNumber = process.env.ADMIN_PHONE.trim(); 
  client.messages.create({
    body: `New Voicemail from ${caller}. Listen: ${recordingUrl}`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: toPhoneNumber,  // Ensure it's in E.164 format
  })
  .then((message) => console.log("SMS sent:", message.sid))
  .catch((error) => console.error("SMS Error:", error));
};