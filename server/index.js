// import express
const express = require('express');

// Import dontenv make variables available in all files
const dotenv = require('dotenv').config()

// Import cors
const cors = require('cors')

// Initialize express
const app = express();

app.use('/', require('./routes/authroutes'))

// Grab a simple variable by extracting it, then store it
const {PORT} = process.env
// Use Port variable and fire a callback, also listen to the port
app.listen(PORT, () => {
    console.log (`Server is running at port: ${PORT}`);
})