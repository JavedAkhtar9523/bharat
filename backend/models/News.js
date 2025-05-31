// const mongoose = require("mongoose");

// const newsSchema = new mongoose.Schema({
//   titleEn: { type: String, required: true },
//   titleHi: { type: String, required: true },
//   descriptionEn: { type: String },
//   descriptionHi: { type: String },
//   contentEn: { type: String, required: true },
//   contentHi: { type: String, required: true },
//   image: { type: String },
//   category: { type: String, required: true },
//   date: { type: Date, default: Date.now },
//   featured: { type: Boolean, default: false },
// });

// module.exports = mongoose.model("News", newsSchema);

// -----------------------

const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    titleEn: { type: String, required: true },
    titleHi: { type: String, required: true },
    contentEn: { type: String, required: true },
    contentHi: { type: String, required: true },
    image: { type: String },
    category: { type: String, required: true },
    featured: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);
