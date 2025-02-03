const express = require("express");
const router = express.Router();
const { handleVoicemail } = require("../controllers/voicemailController");

router.post("/save-voicemail", handleVoicemail);

module.exports = router;