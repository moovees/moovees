const jwtoken = require('../helpers/jwt')

module.exports = {
    authentication(req, res, next) {
        try {
            var decoded = jwtoken.verifyToken(req.headers.token)
            req.headers.decode = decoded
            next()
        } catch (err) {
            //throw new Error(`Invalid token.`)
            next(err)
        }
    }
}