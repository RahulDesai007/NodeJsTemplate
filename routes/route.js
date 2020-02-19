const express = require('express');

const feedController = require('../controllers/controller');

const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
//router.get('/posts',isAuth, feedController.getPosts);
router.get('/posts', feedController.getPosts);

//router.post('/posts',isAuth, feedController.createPost);
router.post('/posts', feedController.createPost);

// POST /feed/post
//router.post('/post',isAuth, feedController.getPost);
router.post('/post', feedController.getPost);

//DELETE /feed/delete
router.post('/delete', feedController.deletePost)

module.exports = router;