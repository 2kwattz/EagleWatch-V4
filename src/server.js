// Express.js basic setup
const express = require('express') 
const app = express() // Express Framework
const port = process.env.PORT || 3000

const axios = require('axios'); // Http request maker
const cheerio = require('cheerio'); // Selector for web scrapping 
const fs = require('fs') // File System Lib
const jwt = require('jsonwebtoken'); // User Authentication for Login system
const cookieParser = require('cookie-parser'); // For parsing cookies from client requests

const routes = require('../src/routes/routes')

// DOTENV initialization
require('dotenv').config();

// Middlewares

// To parse client side Json
app.use(express.json());

// Compresses HTTP responses to reduce their
// size before sending them to the client for performance
app.use(compression());
app.use('/', routes) // For seperate routes file
app.use(cookieParser()); // Client's Cookie Parser
app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded

// Server Listening
app.listen(port, () => {
    console.log(`Eagle Watch Server is running on port ${port}`);
});