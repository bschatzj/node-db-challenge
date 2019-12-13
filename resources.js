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
}
function findProjects() {
    return db('projects')
}

function findProjectsById(id) {
    return db('projects')
        .where({ id })
}

function insertProject(data) {
    return db('projects').insert(data, 'id')
        .then((id) => {
            return findById(id)
        })
}

function findResources(projectId) {
    return db('resources')
        .join('resources', 'resources.id', 'resources.id')
        .where({ 'resources.project_id': projectId })
}

function findResourceById(id) {
    return db('resources')
        .where(({ id }))
}

function insertResource(projectId, resource) {
    return db('resources').insert(resource)
        .then((id) => {
            return db('project_resources').insert({
                project_id: projectId,
                resource_id: id,
            })
        })
        .catch(() => {
            return findResourceById(id)
        })
}

function findTasks() {
    return db('tasks')
}

function findTasksById(id) {
    return db('tasks')
        .where({ id })
}