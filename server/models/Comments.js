const mongoose = require('mongoose')

const commentsSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String
    },
    author: {
        type: String
    }
})

module.exports = mongoose.models['Comment'] || mongoose.model('Comment', commentsSchema)