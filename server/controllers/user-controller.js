const User = require('../models/user')
const axios = require('axios')
const jwt = require('../helpers/jwt')
const {
    OAuth2Client
} = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class UserController {

    static googleSign(req, res, next) {
        // console.log('masuk <<<<<<<<<<<<<<<<<')
        client.verifyIdToken({
                idToken: req.body.id_token,
                audience: process.env.GOOGLE_CLIENT_ID,
            })
            .then(ticket => {
                const payload = ticket.getPayload()
                return Promise.all([
                    User.findOne({
                        email: payload.email
                    }),
                    payload
                ])
            })
            .then(([userExist, payload]) => {
                if (userExist) {
                    return userExist
                } else {
                    let data = {
                        name: payload.name,
                        email: payload.email,
                        password: 'awjkdbahkdgbhwagdjhw'
                    }
                    return User.create(data)
                }
            })
            .then(user => {
                let payloadToken = {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
                let token = jwt.signToken(payloadToken)
                // console.log(token, 'harusnya masuk ke sini <<<<<<<<<<<<<<<<<<')
                res.status(201).json({
                    token
                })
            })
            .catch(next)
    }

}

module.exports = UserController