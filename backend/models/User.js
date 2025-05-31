const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "editor"], default: "editor" },
});

module.exports = mongoose.model("User", userSchema);

// -------------------

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name is required"],
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"],
//     },
//     password: {
//       type: String,
//       required: [true, "Password is required"],
//       minlength: [6, "Password must be at least 6 characters"],
//     },
//     role: {
//       type: String,
//       enum: ["user", "admin"],
//       default: "user",
//     },

//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", userSchema);

// ==========================================

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: [true, "Name is required"] },
//     username: {
//       type: String,
//       required: [true, "Username is required"],
//       unique: true,
//       trim: true,
//       minlength: [3, "Username must be at least 3 characters"],
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"],
//     },
//     password: {
//       type: String,
//       required: [true, "Password is required"],
//       minlength: [6, "Password must be at least 6 characters"],
//     },
//     role: { type: String, enum: ["user", "admin"], default: "user" },
//     isAdmin: { type: Boolean, default: false },
//     isSuperAdmin: { type: Boolean, default: false },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", userSchema);
