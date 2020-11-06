//this is DATA ACCESS!
// getRecipes(): should return a list of all recipes in the database.
// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

const db = require('../api/knexconfig')

module.exports = {
    getRecipes, 
    getShoppingList, 
    getInstructions,
}

function getRecipes(){
    return db('recipes');
}

function getShoppingList(recipe_id){
    return db('quantity')
    .where({ recipe_id : recipe_id})
    .join('ingredients', 'ingredients.ingredient_id', 'quantity.quantity_id')
    .select('ingredients.ingredient_name', 'quantity.quantity')
}

function getInstructions(){
    return db('instructions')
    .where({ recipe_id : id})
    .orderBy('step_order')
}