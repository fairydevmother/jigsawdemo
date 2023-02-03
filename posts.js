const Post = require("./model/Post");

const fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = fetchPosts;
