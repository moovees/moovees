const express = require('express')
const router = express.Router()

const TasteDiveController = require('../controllers/tastedive-controller')

router.get('/', TasteDiveController.getRecommendation)

module.exports = router