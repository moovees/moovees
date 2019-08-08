require('dotenv').config()
const jwt = require('jsonwebtoken')
module.exports = {
    signToken(payload) {
        return jwt.sign(payload, process.env.PROJECT_ACCESS_TOKEN)
    },
    verifyToken(token) {
        return jwt.verify(token, process.env.PROJECT_ACCESS_TOKEN)
    }
}