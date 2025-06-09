// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// exports.register = async (req, res) => {
//   const { username, password, role } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ username, password: hashedPassword, role });
//     await user.save();
//     res.status(201).json({ message: "User registered" });
//   } catch (err) {
//     res
//       .status(400)
//       .json({ message: "Error registering user", error: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );
//     res.json({ token });
//   } catch (err) {
//     res.status(400).json({ message: "Error logging in", error: err.message });
//   }
// };

// jjjjjjjjjjjjjjjjjjjjjjjjjjj666666666666666666666666

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// exports.register = async (req, res) => {
//   const { username, password, mobile } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({
//       username,
//       password: hashedPassword,
//       mobile,
//       role: "user",
//     });
//     await user.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     res
//       .status(400)
//       .json({ message: "Error registering user", error: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );
//     res.json({ token, role: user.role });
//   } catch (err) {
//     res.status(400).json({ message: "Error logging in", error: err.message });
//   }
// };

// exports.promoteToAdmin = async (req, res) => {
//   const { userId } = req.body;
//   try {
//     // Check if the requester is an admin
//     if (req.user.role !== "admin") {
//       return res.status(403).json({ message: "Only admins can promote users" });
//     }

//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     user.role = "admin";
//     await user.save();
//     res.json({ message: "User promoted to admin" });
//   } catch (err) {
//     res
//       .status(400)
//       .json({ message: "Error promoting user", error: err.message });
//   }
// };

// exports.getUsers = async (req, res) => {
//   try {
//     if (req.user.role !== "admin") {
//       return res.status(403).json({ message: "Only admins can view users" });
//     }
//     const users = await User.find().select("username mobile role");
//     res.json(users);
//   } catch (err) {
//     res
//       .status(400)
//       .json({ message: "Error fetching users", error: err.message });
//   }
// };

// ================-------------==============
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { username, password, mobile } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      mobile,
      role: "user",
    });
    await user.save();

    // Generate token for immediate login after registration
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        _id: user._id,
        username: user.username,
        mobile: user.mobile,
        role: user.role,
      },
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error registering user", error: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      role: user.role,
      user: {
        _id: user._id,
        username: user.username,
        mobile: user.mobile,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(400).json({ message: "Error logging in", error: err.message });
  }
};

exports.promoteToAdmin = async (req, res) => {
  const { userId } = req.body;
  try {
    // Check if the requester is an admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Only admins can promote users" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = "admin";
    await user.save();
    res.json({ message: "User promoted to admin" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error promoting user", error: err.message });
  }
};

exports.demoteToUser = async (req, res) => {
  const { userId } = req.body;
  try {
    // Check if the requester is an admin
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Only admins can demote users" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Prevent self-demotion
    if (user._id.toString() === req.user.id) {
      return res.status(400).json({ message: "You cannot demote yourself" });
    }

    // Check if user is already a regular user
    if (user.role === "user") {
      return res
        .status(400)
        .json({ message: "User is already a regular user" });
    }

    user.role = "user";
    await user.save();

    res.json({
      message: "User demoted to regular user",
      user: {
        _id: user._id,
        username: user.username,
        mobile: user.mobile,
        role: user.role,
      },
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error demoting user", error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Only admins can view users" });
    }
    const users = await User.find().select("username mobile role");
    res.json(users);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error fetching users", error: err.message });
  }
};

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// exports.register = async (req, res) => {
//   const { name, email, password, role } = req.body;
//   try {
//     // Validate input
//     if (!name || !email || !password) {
//       return res
//         .status(400)
//         .json({ message: "Name, email, and password are required" });
//     }
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return res.status(400).json({ message: "Invalid email address" });
//     }
//     if (password.length < 6) {
//       return res
//         .status(400)
//         .json({ message: "Password must be at least 6 characters" });
//     }

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user
//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role: role || "user", // Default role
//       isAdmin: role === "admin", // Set isAdmin based on role
//     });

//     await user.save();

//     // Generate JWT
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "30d" }
//     );

//     res.status(201).json({
//       token,
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//       },
//     });
//   } catch (err) {
//     console.error("Registration error:", err);
//     res
//       .status(400)
//       .json({ message: "Error registering user", error: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body; // Changed from username to email
//   try {
//     // Validate input
//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ message: "Email and password are required" });
//     }

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials" });

//     // Generate JWT
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "30d" }
//     );

//     res.json({
//       token,
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//       },
//     });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(400).json({ message: "Error logging in", error: err.message });
//   }
// };

// exports.getMe = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).select("-password");
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//     });
//   } catch (err) {
//     console.error("Get user error:", err);
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

// ===============================

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// exports.register = async (req, res) => {
//   const { name, email, password } = req.body; // Remove role from input
//   try {
//     // Validate input
//     if (!name || !email || !password) {
//       return res
//         .status(400)
//         .json({ message: "Name, email, and password are required" });
//     }
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return res.status(400).json({ message: "Invalid email address" });
//     }
//     if (password.length < 6) {
//       return res
//         .status(400)
//         .json({ message: "Password must be at least 6 characters" });
//     }

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user
//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role: "user", // Always user
//       isAdmin: false, // Always false
//       isSuperAdmin: false, // Always false
//     });

//     await user.save();

//     // Generate JWT
//     const token = jwt.sign(
//       {
//         id: user._id,
//         role: user.role,
//         isAdmin: user.isAdmin,
//         isSuperAdmin: user.isSuperAdmin,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: "30d" }
//     );

//     res.status(201).json({
//       token,
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         isSuperAdmin: user.isSuperAdmin,
//       },
//     });
//   } catch (err) {
//     console.error("Registration error:", err);
//     res
//       .status(400)
//       .json({ message: "Error registering user", error: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     // Validate input
//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ message: "Email and password are required" });
//     }

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials" });

//     // Generate JWT
//     const token = jwt.sign(
//       {
//         id: user._id,
//         role: user.role,
//         isAdmin: user.isAdmin,
//         isSuperAdmin: user.isSuperAdmin,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: "30d" }
//     );

//     res.json({
//       token,
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         isSuperAdmin: user.isSuperAdmin,
//       },
//     });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(400).json({ message: "Error logging in", error: err.message });
//   }
// };

// exports.getMe = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).select("-password");
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       isSuperAdmin: user.isSuperAdmin,
//     });
//   } catch (err) {
//     console.error("Get user error:", err);
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

// ======================================================================
