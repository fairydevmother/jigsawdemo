const express = require('express');
const next = require('next');
const db=require('./db');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const API_URL = process.env.PORT || 'http://localhost:3000';


app.prepare()
  .then(() => {
    const server = express();
    server.get('/api/posts', (req, res) => {
        const posts = db.getPosts();
        res.json(posts);
      });
      
      server.get('/api/docs', (req, res) => {
        const docs = db.getDocs();
        res.json(docs);
      });
      
      server.get('/api/post/:id', (req, res) => {
        const post = db.getPostById(req.params.id);
        res.json(post);
      });

      server.post('/api/post/:id/like', (req, res) => {
        const post = db.getPostById(req.params.id);
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

  