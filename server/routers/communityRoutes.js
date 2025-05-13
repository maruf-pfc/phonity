const express = require('express')
const { getAllPosts, createNewPost, updatePost } = require('../controllers/communityController')

const router = express.Router()

router.get('/', getAllPosts)
router.post('/', createNewPost)
router.put('/:id', updatePost);


module.exports = router