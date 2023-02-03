const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const API_URL = process.env.PORT || 'http://localhost:3000';
const Post = require("./model/Post");
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});
const dtb=require("./db")



mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

const fetchPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};



app.prepare()
  .then(() => {
    const server = express();
      
    server.get('/api/posts', (req, res) => {
      const posts = dtb.getPosts();
      res.json(posts);
    });
       
      server.get('/api/docs', (req, res) => {
        const docs = dtb.getDocs();
        res.json(docs);
      });
      

      server.get('/api/post/:id', (req, res) => {
        const post = dtb.getPostById(req.params.id);
        res.json(post);
      });

      server.post('/api/post/:id/like', (req, res) => {
        const post = dtb.getPostById(req.params.id);
        db.updatePostLikes(req.params.id, post.likes + 1);
        res.json({ likes: post.likes + 1 });
    }); 

    server.get('*', (req, res) => {
      return handle(req, res);
    });
 
    server.on('request', (req, res) => {
      if (req.url.startsWith('/api')) {
        proxy.web(req, res, { target: API_URL });
      } else {
        // handle other requests
      }
    });
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
   
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

  