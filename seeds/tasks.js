
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          projects_id: 1,
          description: 'Well I is lost now!',
          notes: "what is happening?!?",
          completed: true
        },
        {
          projects_id: 1,
          description: 'Get a map',
          notes: "why is this a map of china?",
          completed: true
        },
        {
          projects_id: 2,
          description: 'Buy noodles',
          notes: "make sure they're name brand",
          completed: false
        },
        {
          projects_id: 2,
          description: 'Get new sweater',
          notes: "Detroit lions sweater",
          completed: false
        },
        {
          projects_id: 3,
          description: 'Make sure right mobile home',
          notes: "It's not...",
          completed: false
        },
        {
          projects_id: 3,
          description: 'Go back to 8mile',
          notes: "Detroit4Life",
          completed: false
        }
      ]);
    });
};
