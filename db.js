const fs = require('fs');

const getPosts = () => {
  const posts = JSON.parse(fs.readFileSync('./data/posts.json', 'utf8'));
  return posts;
};

const getDocs = () => {
  const docs = JSON.parse(fs.readFileSync('./data/docs.json', 'utf8'));
  return docs;
};

const featuredPost = () => {
  const featuredPost = JSON.parse(fs.readFileSync('./data/featuredpost.json', 'utf8'));
  return featuredPost;
};


const getPostById = (id) => {
  const posts = getPosts();
  const post = posts.find((p) => p.id === id);
  return post;
};

const updatePostLikes = (id, likes) => {
  const posts = getPosts();
  const postIndex = posts.findIndex((p) => p.id === id);
  posts[postIndex].likes = likes;
  fs.writeFileSync('./data/posts.json', JSON.stringify(posts));
};

module.exports = { getPosts, getPostById, updatePostLikes , featuredPost, getDocs };
