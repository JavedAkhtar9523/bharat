const Channel = require("../models/Channel");

exports.getAllChannels = async (req, res) => {
  try {
    const channels = await Channel.find();
    res.json(channels);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching channels", error: err.message });
  }
};

exports.createChannel = async (req, res) => {
  try {
    const channel = new Channel(req.body);
    await channel.save();
    res.status(201).json(channel);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating channel", error: err.message });
  }
};

exports.updateChannel = async (req, res) => {
  try {
    const channel = await Channel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!channel) return res.status(404).json({ message: "Channel not found" });
    res.json(channel);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error updating channel", error: err.message });
  }
};

exports.deleteChannel = async (req, res) => {
  try {
    const channel = await Channel.findByIdAndDelete(req.params.id);
    if (!channel) return res.status(404).json({ message: "Channel not found" });
    res.json({ message: "Channel deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting channel", error: err.message });
  }
};
