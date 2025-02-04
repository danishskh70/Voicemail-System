require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const voicemailRoutes = require("./routes/voicemailRoutes");
// const { startWhatsApp } = require('./services/whatsappService');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// startWhatsApp();
app.use("/voicemail", voicemailRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.listen(process.env.PORT, () => console.log(`Server running on port http://localhost:${process.env.PORT}`));