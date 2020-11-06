
exports.seed = function (knex) {
  const quantity = [
    {
      quantity_id: '1',
      quantity:'1',
      recipe_id: "1",
      ingredient_id: "1",
    },
    {
      quantity_id: '2',
      quantity:'2',
      recipe_id: "2",
      ingredient_id: "2",
    },
  ];
  // Inserts seed entries
  return knex("quantity").insert(quantity);
};