const express = require('express')
const { getAllPosts, createNewPost, updatePost, createComment, getAllComments, getCommentsByPostId } = require('../controllers/communityController')

const router = express.Router()

router.get('/', getAllPosts)
router.post('/', createNewPost)
router.put('/:id', updatePost);

router.get('/comments', getAllComments)
router.post('/comments', createComment)
router.get('/comments/:postId', getCommentsByPostId)


module.exports = router