const validateNews = (req, res, next) => {
  const { titleEn, titleHi, contentEn, contentHi, category } = req.body;
  if (!titleEn || !titleHi || !contentEn || !contentHi || !category) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  next();
};

const validateChannel = (req, res, next) => {
  const { nameEn, nameHi, logo, color } = req.body;
  if (!nameEn || !nameHi || !logo || !color) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  next();
};

module.exports = { validateNews, validateChannel };
