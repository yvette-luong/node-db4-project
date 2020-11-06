exports.seed = function (knex) {
  const recipes = [
    {
      recipe_id: "1",
      recipe_name: "rice",
      ingredient_name: "whiterice, water",
    },
    {
      recipe_id: "2",
      recipe_name: "ramen",
      ingredient_name: "ramen, oil, egg",
    },
  ];
  // Inserts seed entries
  return knex("recipes").insert(recipes);
};
