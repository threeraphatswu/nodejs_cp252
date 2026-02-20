const tags = [];

const getTags = (req, res) => {
  tags.push(tags.length);
  res.json({ tags });
};

// Implement other controllers related to tags

module.exports = {
  getTags,
  // Export other tag controllers
};
