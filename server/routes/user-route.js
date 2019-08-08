const express = require('express')
const router = express.Router()

const UserController = require('../controllers/user-controller')

router.post('/signin-google', UserController.googleSign)

module.exports = router