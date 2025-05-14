const Post = require("../models/Post");
const Comment = require("../models/Comments");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error for fetching posts",
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const fieldToUpdate = Object.keys(req.body)[0];
    const updateValue = req.body[fieldToUpdate];

    const updateObj = { $set: { [fieldToUpdate]: updateValue } };
    const post = await Post.findByIdAndUpdate(req.params.id, updateObj, {
      new: true,
    });
    console.log(post);
    res.send(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "fail",
      message: "Server error when fetching a post!",
    });
  }
};
const createNewPost = async (req, res) => {
  try {
    const body = req.body.newPost;
    const post = new Post(body);
    const savedPost = await post.save();
    res.status(201).json({
      status: "success",
      message: "Post created successfully",
      data: savedPost,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error when creating new post",
    });
  }
};

// comments
const createComment = async (req, res) => {
  try {
    const comment = req.body;
    const newComment = new Comment(comment);
    const savedComment = await newComment.save();

    res.status(201).json({
      status: "success",
      message: "Post created successfully",
      data: savedComment,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error when creating new comments",
    });
  }
};

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error when fetching comments",
    });
  }
};

const getCommentsByPostId = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    console.log(comments);
    res.json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error when fetching comments",
    });
  }
};

module.exports = {
  getAllPosts,
  createNewPost,
  updatePost,
  createComment,
  getAllComments,
  getCommentsByPostId,
};
