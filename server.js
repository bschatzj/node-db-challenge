const express = require('express');
const ProjectRouter = require('./projectRouter');
const server = express();


server.use(express.json());
server.use('/api/', ProjectRouter);

module.exports = server;