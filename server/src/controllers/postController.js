/* eslint-disable camelcase */
const { users, nfts, posts, images } = require('../models');
const {
  transferTokenToUser,
  getTokenBalance,
} = require('../chainUtils/tokenUtils');

const POSTREWARD = '10000000000000000';
module.exports = {
  getAllposts: async (req, res) => {
    try {
      const allPosts = await posts.findAll({
        include: [
          {
            model: users,
            attributes: ['id', 'wallet_account', 'nickname'],
          },
          {
            model: images,
            attributes: ['uri'],
          },
        ],
      });
      return res.status(200).json(allPosts);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ data: null, message: 'server error' });
    }
  },

  getPostsByPostId: async (req, res) => {
    try {
      const { postId } = req.params;
      const targetIndex = await posts.findOne({
        where: { id: postId },
      });
      await posts.update(
        {
          views: targetIndex.views + 1,
        },
        {
          where: { id: postId },
        },
      );
      const post = await posts.findOne({
        include: [
          {
            model: users,
            attributes: ['id', 'wallet_account', 'nickname'],
          },
          {
            model: images,
            attributes: ['uri'],
          },
        ],
        where: { id: postId },
      });
      return res.status(200).json(post);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ data: null, message: 'server error' });
    }
  },

  createNewPost: async (req, res, next) => {
    console.log(req.body);
    const { user_id, title, location, store_name, content } = req.body;
    if (!user_id || !title || !location || !store_name || !content) {
      return res
        .status(400)
        .json({ message: 'input all required values', data: null });
    }
    try {
      const { email, nickname } = req.decoded;
      const user = await users.findOne({
        where: {
          email,
          nickname,
        },
      });
      if (!user) {
        return res.status(403).json({ data: null, message: 'no such user' });
      }

      const newPost = await posts.create({
        title,
        location,
        store_name,
        content,
        views: 0,
        likes: 0,
        user_id: user.id,
      });
      console.log(newPost);
      const newImg = await images.create({
        uri: req.file.location,
        post_id: newPost.id,
      });
      console.log(newImg);
      await transferTokenToUser(user.wallet_account, POSTREWARD);
      const newErc20 = await getTokenBalance(user.wallet_account);
      await user.update({
        erc20: newErc20,
      });
      return res.status(200).send({ posts: newPost, images: newImg });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  },

  deletePosts: async (req, res) => {
    // 수정필요사항 : DB 반영 및 AWS에서도 삭제 가능하도록 구현 필요.
    const { postId } = req.params;
    const ifExists = await posts.findOne({
      where: { id: postId },
    });
    try {
      if (!ifExists) {
        return res
          .status(400)
          .send({ data: null, message: 'no according posts' });
      }
      const deletePost = await posts.destroy({
        where: { id: postId },
      });
      const deleteImg = await images.destroy({
        where: { post_id: postId },
      });
      console.log(deletePost);
      console.log(deleteImg);
      return res.status(200).send({ message: 'successfully deleted!' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ data: null, message: 'server error' });
    }
  },

  deleteImgs: async (req, res) => {
    const { postId } = req.parms;
    const ifExists = await images.findOne({
      where: { id: postId },
    });
    try {
      if (!ifExists) {
        return res
          .status(400)
          .send({ data: null, message: 'no according posts' });
      }
      const deleteImg = await images.destroy({
        where: { id: postId },
      });
      console.log(deleteImg);
      return res.status(200).send({ message: 'successfully deleted!' });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ data: null, message: 'server error' });
    }
  },

  updateLikes: async (req, res) => {
    const { id } = req.body;
    try {
      if (id === null) {
        return res
          .status(400)
          .send({ data: null, message: 'no according posts' });
      }
      const targetIndex = await posts.findOne({
        where: { id },
      });
      await posts.update(
        {
          likes: targetIndex.likes + 1,
        },
        {
          where: { id },
        },
      );
      return res.status(200).json({
        likes: targetIndex.likes + 1,
        message: 'successfully updated!',
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ data: null, message: 'server error' });
    }
  },
};