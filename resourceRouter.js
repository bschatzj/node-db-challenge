const express = require('express');
const Project = require('./resources');
const db = require('./Data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    resourcedb.get()
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({ error: "there was an error" })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.body.id
    console.log(req.body)
    resourcedb.getById(id)
        .then(task => {
            res.status(201).json({ message: "success" })
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', (req, res) => {
    const taskObj = req.body;
    resourcedb.insert(taskObj)
        .then(resource => {
            res.status(201).json({ message: "got the new resources" })
        })
        .catch(err => {
            res.status(201).json(err)
        })
})


module.exports = router;