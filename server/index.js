// import express
const express = require('express');

// Import dontenv make variables available in all files
const dotenv = require('dotenv').config()
// make variables available in all files
require('dotenv').config()

// Import cors
const cors = require('cors')

// call mongoose
const mongoose = require('mongoose')

// call cookie parser
const cookieParser = require('cookie-parser')

// Initialize express
const app = express();

// grab DB Key from process.env & MONGODB_URL is the secret name within CodeSpace
const { MONGODB_URL } = process.env 

// DB CONNECTION
mongoose.connect(MONGODB_URL)
.then(() => console.log('DB connected'))
.catch((err) => console.log('DB not connected', err))

// middleware to parse data (from req.body for e.g)
// Inject middleware to understand the json format, additional layer.
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authroutes'))

// Grab a simple variable by extracting it, then store it
const {PORT} = process.env
// Use Port variable and fire a callback, also listen to the port
app.listen(PORT, () => {
    console.log (`Server is running at port: ${PORT}`);
})