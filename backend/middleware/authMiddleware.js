const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;

// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const authMiddleware =
//   (roles = []) =>
//   async (req, res, next) => {
//     const token = req.header("Authorization")?.replace("Bearer ", "");
//     if (!token) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       const user = await User.findById(decoded.id);
//       if (!user) {
//         return res.status(401).json({ message: "User not found" });
//       }

//       if (roles.length && !roles.includes(user.role)) {
//         return res.status(403).json({ message: "Access denied" });
//       }

//       req.user = user;
//       next();
//     } catch (err) {
//       res.status(401).json({ message: "Invalid token", error: err.message });
//     }
//   };

// module.exports = authMiddleware;

// =======================

// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const authMiddleware = async (req, res, next) => {
//   const token = req.header("Authorization")?.replace("Bearer ", "");
//   if (!token) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id);
//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     req.user = user;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Invalid token", error: err.message });
//   }
// };

// const isAdmin = (req, res, next) => {
//   if (!req.user || !req.user.isAdmin) {
//     return res.status(403).json({ message: "Admin access required" });
//   }
//   next();
// };

// const isSuperAdmin = (req, res, next) => {
//   if (!req.user || !req.user.isSuperAdmin) {
//     return res.status(403).json({ message: "Super-admin access required" });
//   }
//   next();
// };

// module.exports = { authMiddleware, isAdmin, isSuperAdmin };

// ============================

// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const authMiddleware =
//   (roles = []) =>
//   async (req, res, next) => {
//     const token = req.header("Authorization")?.replace("Bearer ", "");
//     if (!token) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       const user = await User.findById(decoded.id).select("-password");
//       if (!user) {
//         return res.status(401).json({ message: "User not found" });
//       }

//       // Check roles
//       const userRole = user.isAdmin ? "admin" : "user";
//       if (roles.length && !roles.includes(userRole)) {
//         return res.status(403).json({ message: "Access denied" });
//       }

//       req.user = user;
//       next();
//     } catch (err) {
//       res.status(401).json({ message: "Invalid token", error: err.message });
//     }
//   };

// const isAdmin = (req, res, next) => {
//   if (!req.user || !req.user.isAdmin) {
//     return res.status(403).json({ message: "Admin access required" });
//   }
//   next();
// };

// const isSuperAdmin = (req, res, next) => {
//   if (!req.user || !req.user.isSuperAdmin) {
//     return res.status(403).json({ message: "Super-admin access required" });
//   }
//   next();
// };

// module.exports = { authMiddleware, isAdmin, isSuperAdmin };
