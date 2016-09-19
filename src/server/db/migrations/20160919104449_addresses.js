exports.up = function(knex, Promise) {
  return knex.schema.createTable('addresses', ((table) => {
    table.increments();
    table.string('line_1').notNullable();
    table.string('line_2');
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('zip').notNullable();
  }));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('addresses');
};
