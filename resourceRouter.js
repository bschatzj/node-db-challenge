const express = require('express');
const Project = require('./resources');
const db = require('./Data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    Project.findResources()
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({ error: "there was an error" })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.body)
    Project.findResourceById(id)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({error: "server error" })
        })
})

router.post('/', (req, res) => {
    const resource = req.body;
    Project.insertResource(resource)
        .then(resource => {
            res.status(201).json({ message: "got the new resources" })
        })
        .catch(err => {
            res.status(201).json(err)
        })
})


module.exports = router;