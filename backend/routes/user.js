// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/userController");
// const { isSuperAdmin } = require("../middleware/auth");

// router.get("/", isSuperAdmin, userController.getAllUsers);
// router.put("/role", isSuperAdmin, userController.updateUserRole);

// module.exports = router;

// ===============

// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/userController");
// const {
//   authMiddleware,
//   isSuperAdmin,
// } = require("../middleware/authMiddleware");

// router.get("/", authMiddleware, isSuperAdmin, userController.getAllUsers);
// router.put(
//   "/role",
//   authMiddleware,
//   isSuperAdmin,
//   userController.updateUserRole
// );
// router.get(
//   "/actions",
//   authMiddleware,
//   isSuperAdmin,
//   userController.getAdminActions
// );

// module.exports = router;
