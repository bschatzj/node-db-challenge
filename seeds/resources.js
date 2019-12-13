
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { 
          id: 1,
          resource_name: "microphone",
          description: "To spit this fire",
          projects_id: 1
        },
        {
          id: 2,
          resource_name: "notebook",
          description: "Used to keep track of this sick rhymes",
          projects_id: 1
        },
        { 
          id: 3,
          resource_name: "haters",
          description: "fuel my success",
          projects_id: 3,
        }
      ]);
    });
};
