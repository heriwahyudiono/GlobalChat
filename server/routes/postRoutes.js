const express = require('express');
const postController = require('../controllers/postController');
const authenticationMiddleware = require('../middleware/authenticationMiddleware');

const router = express.Router();

router.post(
  '/add',
  authenticationMiddleware.authenticateToken,
  postController.addPost
);

router.get(
  '/all',
  authenticationMiddleware.authenticateToken,
  postController.getPosts
);

module.exports = router;