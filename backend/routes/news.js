const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", newsController.getAllNews);
router.get("/:id", newsController.getNewsById);
router.post("/", authMiddleware, newsController.createNews);
router.put("/:id", authMiddleware, newsController.updateNews);
router.delete("/:id", authMiddleware, newsController.deleteNews);

module.exports = router;

// ---------------------------

// const express = require("express");
// const router = express.Router();
// const News = require("../models/News");
// const { validateNews } = require("../middleware/validate");
// const { authMiddleware } = require("../middleware/authMiddleware");

// // Get all news or filter by category
// router.get("/", async (req, res) => {
//   try {
//     const { category } = req.query;
//     const query = category ? { category: new RegExp(category, "i") } : {};
//     const news = await News.find(query).sort({ createdAt: -1 });
//     res.json(news);
//   } catch (error) {
//     console.error("Error fetching news:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Create news
// router.post("/", authMiddleware(["admin"]), validateNews, async (req, res) => {
//   try {
//     const news = new News(req.body);
//     await news.save();
//     res.status(201).json(news);
//   } catch (error) {
//     console.error("Error creating news:", error);
//     res
//       .status(400)
//       .json({ message: "Error creating news", error: error.message });
//   }
// });

// // Update news
// router.put(
//   "/:id",
//   authMiddleware(["admin"]),
//   validateNews,
//   async (req, res) => {
//     try {
//       const news = await News.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//       });
//       if (!news) {
//         return res.status(404).json({ message: "News not found" });
//       }
//       res.json(news);
//     } catch (error) {
//       console.error("Error updating news:", error);
//       res
//         .status(400)
//         .json({ message: "Error updating news", error: error.message });
//     }
//   }
// );

// // Delete news
// router.delete("/:id", authMiddleware(["admin"]), async (req, res) => {
//   try {
//     const news = await News.findByIdAndDelete(req.params.id);
//     if (!news) {
//       return res.status(404).json({ message: "News not found" });
//     }
//     res.json({ message: "News deleted" });
//   } catch (error) {
//     console.error("Error deleting news:", error);
//     res
//       .status(400)
//       .json({ message: "Error deleting news", error: error.message });
//   }
// });

// module.exports = router;
