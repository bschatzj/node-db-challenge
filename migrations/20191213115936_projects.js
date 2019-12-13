// A `project` is what needs to be done. We want to store the following data about a `project`:

// - [ ] a unique Id.
// - [ ] a name. This column is required.
// - [ ] a description.
// - [ ] a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be `false`.

// A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:

// - [ ] a unique Id.
// - [ ] a name. This column is required.
// - [ ] a description.

// The database should not allow resources with duplicate names.

// An `task` one of the steps needed to complete the project. We want to store the following data about an `task`.

// - [ ] a unique id.
// - [ ] a description of what needs to be done. This column is required.
// - [ ] a notes column to add additional information.
// - [ ] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.

exports.up = function (knex) {
    return knex.schema
        .createTable('projects', (tbl) => {
            tbl.increments('id').unique();
            tbl.string('projects_name').notNullable();
            tbl.string('description');
            tbl.boolean('completed').defaultTo(false).notNullable();
        })
        .createTable('resources', (tbl) => {
            tbl.increments('id').unique();
            tbl.string('resource_name').notNullable();
            tbl.string('description');
            tbl.integer('projects_id').notNullable().references('id').inTable('projects').onUpdate("CASCADE")

        })
        .createTable('tasks', (tbl) => {
            tbl.increments('id').unique();
            tbl.string('description').notNullable();
            tbl.string('notes');
            tbl.boolean('completed').notNullable();
            tbl.integer('projects_id').notNullable().references('id').inTable('projects').onUpdate("CASCADE");
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
