const express = require('express')
const router = express.Router()

const YoutubeController = require('../controllers/youtube-controller')

router.get('/search', YoutubeController.search)

module.exports = router