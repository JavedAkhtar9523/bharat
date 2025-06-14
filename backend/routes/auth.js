// const express = require("express");
// const router = express.Router();
// const authController = require("../controllers/authController");

// router.post("/register", authController.register);
// router.post("/login", authController.login);

// module.exports = router;

// jjjjjjjjjjjjjjjjjjjjj6666666666666666

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/promote", authMiddleware, authController.promoteToAdmin);
router.post("/demote", authMiddleware, authController.demoteToUser);
router.get("/users", authMiddleware, authController.getUsers);

module.exports = router;

// --------------------------
// const express = require("express");
// const router = express.Router();
// const authController = require("../controllers/authController");
// const { authMiddleware } = require("../middleware/authMiddleware");

// router.post("/register", authController.register);
// router.post("/login", authController.login);
// router.get("/me", authMiddleware(["user", "admin"]), authController.getMe);

// module.exports = router;

// ==============================================================

// const express = require("express");
// const router = express.Router();
// const authController = require("../controllers/authController");
// const { authMiddleware } = require("../middleware/authMiddleware"); // Destructure authMiddleware

// router.post("/register", authController.register);
// router.post("/login", authController.login);
// router.get("/me", authMiddleware, authController.getMe); // Use authMiddleware directly

// module.exports = router;
