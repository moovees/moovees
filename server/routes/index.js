const express = require('express')
const router = express.Router()

const userRoute = require('./user-route')
const youtubeRoute = require('./youtube-route')
const tmdbRoute = require('./tmdb-route')
const tasteDiveRoute = require('./tastedive-route')

router.use('/users', userRoute)
router.use('/youtube', youtubeRoute)
router.use('/tmdb', tmdbRoute)
router.use('/taste-dive', tasteDiveRoute)

module.exports = router