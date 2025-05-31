const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
  nameEn: { type: String, required: true },
  nameHi: { type: String, required: true },
  logo: { type: String, required: true },
  color: { type: String, required: true },
  schedule: [
    {
      time: String,
      titleEn: String,
      titleHi: String,
      live: Boolean,
    },
  ],
});

module.exports = mongoose.model("Channel", channelSchema);
