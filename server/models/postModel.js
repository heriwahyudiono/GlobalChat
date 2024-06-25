const db = require('../config/connection');

const addPost = (user_id, caption) => {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO products (user_id, caption) VALUES (?, ?)',
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

module.exports = {
  addPost,
};