const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

function hashPassword(input) {
    return bcrypt.hashSync(input, salt)
}

function compareHash(input, hashPassword) {
    return bcrypt.compareSync(input, hashPassword)
}

module.exports = {
    hashPassword,
    compareHash
}