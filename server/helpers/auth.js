const bcrypt = require('bcrypt');

// generate a salt and hash on separate function calls
const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if(err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err)
                }
                resolve(hash)
            } )
        } )
    } )
}

const comparePasswords = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}

// exported functions to be used in controller
module.exports = {
    hashPassword,
    comparePasswords
}