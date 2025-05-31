const News = require("../models/News");
const Channel = require("../models/Channel");

exports.getDashboardSummary = async (req, res) => {
  try {
    const newsCount = await News.countDocuments();
    const channelCount = await Channel.countDocuments();
    const recentNews = await News.find()
      .sort({ date: -1 })
      .limit(5)
      .select("titleEn category date");
    const recentChannels = await Channel.find()
      .sort({ _id: -1 })
      .limit(5)
      .select("nameEn");

    res.status(200).json({
      summary: {
        totalNews: newsCount,
        totalChannels: channelCount,
        recentNews,
        recentChannels,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching dashboard summary",
      error: err.message,
    });
  }
};
