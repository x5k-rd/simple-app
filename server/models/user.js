// acts as in between layerm, code to DB for easebility 
const mongoose = require('mongoose')

// User Schema
const {Schema} = mongoose

const userSchema = new Schema ({
    name: String,
    email: {
        type:String,
        unique: true
    },
    password: String
})

// find user model in DB
const UserModel = mongoose.model('User', userSchema);

// export to use it in controllers
module.exports = UserModel;