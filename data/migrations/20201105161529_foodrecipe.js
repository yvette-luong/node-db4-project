

exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.string('recipe_name').notNullable().unique();
        tbl.string('ingredient_name').notNullable().unique();

    })  
    .createTable('instructions', tbl => {
        tbl.increments('step_id');
        tbl.integer('step_order').notNullable();
        tbl.string('instructions').notNullable();
        tbl.integer('recipe_id').unsigned().notNullable().references('recipe_id').inTable('recipes');
    })
    .createTable('quantity', tbl => {
        tbl.increments('quantity_id');
        tbl.float('quantity').notNullable();
        tbl.integer('recipe_id').unsigned().notNullable().references('recipe_id').inTable('recipes');
        tbl.integer('ingredient_id').unsigned().notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id').unsigned().notNullable();
        tbl.string('ingredient_name').unique().references('ingredient_name').inTable('recipes');
    })
    };
    
    exports.down = function(knex) {
         // drop in the opposite order
      return knex.schema
      .dropTableIfExists('ingredients')
      .dropTableIfExists('quantity')
      .dropTableIfExists('instructions')
      .dropTableIfExists('recipes')
    };