// import schema
const User = require("../models/user")

// created a fucntion for test which sends a  jsonresponse and exported it to use in authroutes
const test = (req, res) =>{
    res.json('this test is working')
}

// DB operation, always uses async / await for 
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
        // check if email is valid & unique
        const exist = await User.findOne({email})
        if(exist) {
            return res.json({ 
                error:'Email is already used'
            })
        }
        // create user in DB
        const user = await User.create({
            name, email, password
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser
}