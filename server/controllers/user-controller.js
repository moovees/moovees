const User = require('../models/user')
const axios = require('axios')
const jwt = require('../helpers/jwt')
const bcrypt = require('../helpers/bcrypt')

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

    static signin(req, res, next) {
        User.findOne({
                email: req.body.email
            })
            .then(user => {
                if (user) {
                    let check = bcrypt.compareHash(req.body.password, user.password)
                    if (check) {
                        let payload = {
                            id: user._id,
                            name: user.name,
                            email: user.email
                        }
                        let token = jwt.signToken(payload)
                        res.status(200).json(token)
                    } else {
                        next({
                            code: 404,
                            message: 'Invalid username / password.'
                        })
                    }
                } else {
                    next({
                        code: 404,
                        message: 'Invalid username / password.'
                    })
                }
            })
            .catch(next)
    }

    static signup(req, res, next) {

        let data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        User.create(data)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(next)
    }
}

module.exports = UserController