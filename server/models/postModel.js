const db = require('../config/connection');

const addPost = (user_id, caption) => {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO posts (user_id, caption) VALUES (?, ?)',
      [user_id, caption],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const getPosts = () => {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT posts.*, users.name FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.created_at DESC',
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = {
  addPost,
  getPosts,
};

