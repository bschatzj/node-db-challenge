const db = require('./data/dbConfig');

module.exports = {
    findProjects,
    findProjectsById,
    insertProject,
    findResources,
    findResourceById,
    insertResource,
    findTasks,
    findTasksById,
    insertTask
}
function findProjects() {
    return db('projects')
}

function findProjectsById(id) {
    return db('projects')
        .where({ id })
}

function insertProject(data) {
    return db('projects').insert(data)
        .then((id) => {
            return findById(id)
        })
}

function findResources() {
    return db('resources')
}

function findResourceById(id) {
    return db('resources')
        .where(({ id }))
}

function insertResource(resource) {
    return db('resources').insert(resource)
}


function findTasks(id) {
    return db('tasks')
        .select('tasks.description', 'tasks.notes', 'tasks.completed', 'projects.projects_name')
        .join('projects', 'projects.id', 'tasks.projects_id')
        .where("projects_id", id);
}

function findTasksById(id) {
    return db('tasks')
        .where(({ id }))
}

function insertTask(task) {
    return db.insert(task, "*").into("tasks");
}