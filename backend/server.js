// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const authRoutes = require("./routes/auth");
// const newsRoutes = require("./routes/news");
// const channelRoutes = require("./routes/channels");
// const dashboardRoutes = require("./routes/dashboard"); // Added from previous response

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/news", newsRoutes);
// app.use("/api/channels", channelRoutes);
// app.use("/api/dashboard", dashboardRoutes); // Added from previous response

// // MongoDB Connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       // Removed deprecated options
//       // Add modern options if needed
//       serverSelectionTimeoutMS: 5000, // Timeout after 5s
//       socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
//     });
//     console.log("MongoDB connected successfully");
//   } catch (err) {
//     console.error("MongoDB connection error:", {
//       message: err.message,
//       name: err.name,
//       code: err.code,
//       codeName: err.codeName,
//     });
//     process.exit(1); // Exit process on failure
//   }
// };

// // Connect to MongoDB
// connectDB();

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// --------------------------
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const authRoutes = require("./routes/auth");
// const newsRoutes = require("./routes/news");
// const channelRoutes = require("./routes/channels");
// const dashboardRoutes = require("./routes/dashboard");

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/news", newsRoutes);
// app.use("/api/channels", channelRoutes);
// app.use("/api/dashboard", dashboardRoutes);

// // MongoDB Connection
// // mongoose
// //   .connect(process.env.MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => console.log("MongoDB connected"))
// //   .catch((err) => console.error("MongoDB connection error:", err));

// mongoose
//   .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/newsbharat", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
//     family: 4, // Use IPv4, skip IPv6
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // export const connectDB = async () => {
// //   const { connection } = await mongoose.connect(process.env.MONGO_URI);

// //   console.log(`MongoDB connected with ${connection.host}`);
// // };
// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// =================

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const newsRoutes = require("./routes/news");
const channelRoutes = require("./routes/channels");
const dashboardRoutes = require("./routes/dashboard");
// const userRoutes = require("./routes/user");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/channels", channelRoutes);
app.use("/api/dashboard", dashboardRoutes);
// app.use("/api/users", userRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/newsbharat", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    family: 4,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ------

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
