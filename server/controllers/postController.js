const responseUtils = require('../utils/responseUtils');
const postModel = require('../models/postModel');

const addPost = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { caption } = req.body;

    await postModel.addPost(user_id, caption);

    return responseUtils.sendSuccess(res, 'Postingan berhasil ditambahkan');
  } catch (error) {
    console.error(error);
    return responseUtils.sendError(res, 500, 'Gagal menambahkan postingan');
  }
};

module.exports = {
  addPost,
};