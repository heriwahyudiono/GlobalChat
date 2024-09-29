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

const getPosts = async (req, res) => {
  try {
    const posts = await postModel.getPosts();

    return responseUtils.sendSuccess(res, "Berhasil mendapatkan postingan", posts);
  } catch (error) {
    console.error(error);
    return responseUtils.sendError(res, 500, "Gagal mendapatkan postingan");
  }
};

module.exports = {
  addPost,
  getPosts,
};
