// import express
const express = require('express');
// initialize express with router
const router = express.Router();
// ensure that different hosts can connect with different api endpoints 
const cors = require('cors')
// import from authcontrollers
const { test, registerUser, loginUser } = require('../controllers/authControllers')

// middle ware for router
router.use(
    cors({
        credentials: true,
        origin: 'https://shiny-cod-r4q6q4jvv9x25v94-5173.app.github.dev'
    })
)

// used Test as function inside GET router
router.get('/', test)

// routers
router.post('/register', registerUser)
router.post('/login', loginUser)


// always export files in express
module.exports = router