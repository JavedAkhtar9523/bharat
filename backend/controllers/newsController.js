const News = require("../models/News");

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching news", error: err.message });
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: "News not found" });
    res.json(news);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching news", error: err.message });
  }
};

exports.createNews = async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating news", error: err.message });
  }
};

exports.updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!news) return res.status(404).json({ message: "News not found" });
    res.json(news);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error updating news", error: err.message });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) return res.status(404).json({ message: "News not found" });
    res.json({ message: "News deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting news", error: err.message });
  }
};
