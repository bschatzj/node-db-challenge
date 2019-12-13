const express = require('express');
const Project = require('./resources');
const db = require('./Data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    Project.findTasks()
        .then(task => {
            res.json(task);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Project.findTasks(id)
        .then(proj => {
            if (proj) {
                res.json(proj);
            } else {
                res.status(404).json({ message: 'Could not find project with id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Server Error' });
        });
});

router.post('/:id/project', (req, res) => {
    const projData = req.body;

    Project.insertProject(projData)
        .then(proj => {
            res.status(201).json(proj);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to post to project' });
        });
});


module.exports = router;