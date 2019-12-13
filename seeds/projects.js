
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          projects_name: "Lose yourself",
          description: "In the music",
          completed: false
        },
        {
          id: 2,
          projects_name: "Make mom's Spagheti",
          description: "Check for vomit on sweater",
          completed: false
        },
        {
          id: 3,
          projects_name: "Go to lab",
          description: "Can't lose another rap battle",
          completed: false
        }
      ]);
    });
};
