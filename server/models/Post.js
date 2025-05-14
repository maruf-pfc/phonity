const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    contents: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String
    },
    auth_avatar: {
        type: String
    },
    auth_name: {
        type: String
    }
})

module.exports = mongoose.models['Post'] || mongoose.model('Post', postSchema)
