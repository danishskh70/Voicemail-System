const nodemailer = require("nodemailer");
require("dotenv").config();

exports.sendEmailNotification = (caller, recordingUrl) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: "navnathjadhav0789@gmail.com",
    subject: "New Voicemail Received",
    text: `New voicemail from ${caller}. Listen: ${recordingUrl}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.error("Email Error:", error);
    else console.log("Email sent:", info.response);
  });
};