// Express.js basic setup
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const axios = require('axios'); // Http request maker
const cheerio = require('cheerio'); // Selector for web scrapping 

// DOTENV initialization
require('dotenv').config();

// Middlewares

// To parse client side Json
app.use(express.json());

// Compresses HTTP responses to reduce their
// size before sending them to the client for performance
app.use(compression());

// Server Listening
app.listen(port, () => {
    console.log(`Eagle Watch Server is running on port ${port}`);
});