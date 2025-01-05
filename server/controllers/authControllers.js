// import schema
const User = require("../models/user")

// import bcrypt functions
const { hashPassword, comparePasswords } = require('../helpers/auth')

// call jsonwebtoken
const jwt = require('jsonwebtoken');

// call secret value set for JWT_Token which is stored in secrets and called via process.env
const { JWT_SECRET } = process.env

// created a fucntion for test which sends a  jsonresponse and exported it to use in authroutes
const test = (req, res) =>{
    res.json('this test is working')
}

// DB operation, always uses async / await for 
// Register endpoint
const registerUser = async (req, res) => {
    try {
        // this info comes from req.body and is parsed by express middleware
        const {name, email, password} = req.body;
        // Check if name was typed
        if(!name) {
            return res.json({
                error: 'name is mandatory'
            })
        };
        // check is password is valid
        if(!password || password.length < 6){
            return res.json({
                error: 'Password is required and it must have 6 or more characters'
            })
        };
        if(!email) {
            res.json({
                error: 'email is mandatory'
            })
        }
        // check if email is valid & unique
        const exist = await User.findOne({email})
        if(exist) {
            return res.json({ 
                error:'Email is already used'
            })
        }
        
        const hashedPassword = await hashPassword(password)
        // create user in DB
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

// Login enpoint
const loginUser = async (req, res) => {
try {
    // grab email and pw 
    const {email, password} = req.body;
    // check if user exists
    const user = await User.findOne({email});
    if(!user) {
        return res.json({
            error: 'No user found'
        })
    }
    // Check if password match, user.password is used from registration endpoint
    const match = await comparePasswords(password, user.password)
    if(match) {
        jwt.sign({email: user.email, id: user._id, name: user.name}, JWT_SECRET, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token).json(user)
            })
    }
    if(!match) {
        res.json ({
            error: "Password is incorrect"
        })
    }
} catch (error) {
    console.log(error)
 }
}

module.exports = {
    test,
    registerUser,
    loginUser
}