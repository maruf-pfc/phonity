const Post = require('../models/Post')

const getAllPosts = async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch(err){
        console.log(err)
        return res.status(500).json({
            status: 'fail',
            message: "Server error for fetching posts"
        })
    }
}

const createNewPost = async(req, res) => {
    try{
        const body = req.body.newPost;
        const post = new Post(body)
        const savedPost = await post.save();
        res.status(201).json({
            status: 'success',
            message: 'Post created successfully',
            data: savedPost
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: "Server error when creating new post"
        })
    }
}

module.exports = {
    getAllPosts,
    createNewPost
}