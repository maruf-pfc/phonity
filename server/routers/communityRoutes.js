const express = require('express')
const { getAllPosts, createNewPost } = require('../controllers/communityController')

const router = express.Router()

router.get('/', getAllPosts)
router.post('/', createNewPost)


module.exports = router