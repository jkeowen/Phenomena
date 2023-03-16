// Use the dotenv package, to create environment variables
// require('dotenv').config();
// Create a constant variable, PORT, based on what's in process.env.PORT or fallback to 3000
// Import express, and create a server
const express = require('express');
const server = express();
const path = require('path');

server.use('/dist', express.static(path.join(__dirname, "dist")));
server.get('/', (req, res, next) => res.sendFile(path.join(__dirname, "public", "index.html")))
// Require morgan and body-parser middleware
const morgan = require('morgan');
// Have the server use morgan with setting 'dev'
server.use(morgan('dev'));
// Import cors 
const cors = require('cors');
// Have the server use cors()
server.use(cors());
// Have the server use bodyParser.json()
server.use(express.json())

// Have the server use your api router with prefix '/api'
const apiRouter = require('./api');
server.use('/api', apiRouter);
// Import the client from your db/index.js
const { client } = require('./db');
// Create custom 404 handler that sets the status code to 404.
server.use('*',(req, res, next)=>{
    res.status(404)
    res.send({error: 'route not found'})
})
// Create custom error handling that sets the status code to 500
// and returns the error as an object

server.use((err, req, res, next)=>{
    res.status(500);
    res.send({error: err.message})
})

// Start the server listening on port PORT
// On success, connect to the database
const PORT =  process.env.PORT || 3000;
server.listen(PORT, ()=>{
    client.connect();
    console.log(`Listening ON PORT ${PORT}`)
})