const express = require('express');
const Project = require('./resources');
const db = require('./Data/dbConfig');

const router = express.Router();

router.get('/:id', (req, res) => {
    Project.findTasks(req.params)
        .then(task => {
            res.json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});


router.post('/:id', (req, res) => {
    const projData = req.body;
    const id = req.params
    Project.insertTask(projData, id)
        .then(proj => {
            res.status(201).json(proj);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to post task to project' });
        });
});


module.exports = router;