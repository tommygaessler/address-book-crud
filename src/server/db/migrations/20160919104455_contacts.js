exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', ((table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('phone_number').notNullable();
    table.string('email_address').notNullable();
    table.string('image_url').notNullable();
    table.integer('address_id').references('addresses.id').notNullable();
  }));
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
