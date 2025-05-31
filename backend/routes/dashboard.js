const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/summary", authMiddleware, dashboardController.getDashboardSummary);

module.exports = router;

// ====================

// const express = require("express");
// const router = express.Router();
// const dashboardController = require("../controllers/dashboardController");
// const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

// router.get(
//   "/summary",
//   authMiddleware,
//   isAdmin,
//   dashboardController.getDashboardSummary
// );

// module.exports = router;
