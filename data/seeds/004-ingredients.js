exports.seed = function (knex) {
  const ingredients = [
    {
      ingredient_id: "1",
      ingredient_name: "whiterice, water",
    },
    {
      ingredient_id: "2",
      ingredient_name: "ramen, oil, egg",
    },
  ];
  // Inserts seed entries
  return knex("ingredients").insert(ingredients);
};