const express = require('express')
const router = express.Router()

const UserController = require('../controllers/user-controller')

router.post('/signin-google', UserController.googleSign)
router.post('/signin', UserController.signin)
router.post('/signup', UserController.signup)

module.exports = router