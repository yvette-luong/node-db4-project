exports.seed = function (knex) {
  const instructions = [
    {
      step_id: "1",
      step_order: "1",
      instructions: "cook with water",
      recipe_id:"1",
    },
    {
      step_id: "2",
      step_order: "2",
      instructions: "cook with water, oil, green onion",
      recipe_id:"2",
    },
  ];
  // Inserts seed entries
  return knex('instructions').insert(instructions);
};
