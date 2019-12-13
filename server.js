const express = require('express');
const ProjectRouter = require('./projectRouter');
const TaskRouter = require('./taskRoutes');
const ResourceRouter = require('./resourceRouter');

const server = express();


server.use(express.json());
server.use('/projects', ProjectRouter);
server.use('/tasks', TaskRouter);
server.use('/resources', ResourceRouter)

module.exports = server;