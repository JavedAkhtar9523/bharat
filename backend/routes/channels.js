const express = require("express");
const router = express.Router();
const channelController = require("../controllers/channelController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", channelController.getAllChannels);
router.post("/", authMiddleware, channelController.createChannel);
router.put("/:id", authMiddleware, channelController.updateChannel);
router.delete("/:id", authMiddleware, channelController.deleteChannel);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const channelController = require("../controllers/channelController");
// const { authMiddleware } = require("../middleware/authMiddleware");
// const { validateChannel } = require("../middleware/validate");

// // Public routes
// router.get("/", channelController.getAllChannels);

// // Admin-only routes
// router.post(
//   "/",
//   authMiddleware(["admin"]),
//   validateChannel,
//   channelController.createChannel
// );
// router.put(
//   "/:id",
//   authMiddleware(["admin"]),
//   validateChannel,
//   channelController.updateChannel
// );
// router.delete(
//   "/:id",
//   authMiddleware(["admin"]),
//   channelController.deleteChannel
// );

// module.exports = router;
