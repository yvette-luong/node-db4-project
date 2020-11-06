
exports.up = function(knex) {
    return knex.schema
      .createTable('', tbl => {
      })
      .createTable('', tbl => {
      })
      .createTable('', tbl => {
      })
      .createTable('', tbl => {
      })
  };
  exports.down = function(knex, Promise) {
    // drop in the opposite order
    return knex.schema
      .dropTableIfExists('')
      .dropTableIfExists('')
      .dropTableIfExists('')
      .dropTableIfExists('')
  };
