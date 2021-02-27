const validatePostBody = (req, res, next) => {
  const { name, age } = req.body;
  if (!name || name.length <= 0 || !age) {
    return res.status(400).json({
      error: 'sorry name and age cannot be empty',
    });
  }
  return next();
};

module.exports = validatePostBody;
