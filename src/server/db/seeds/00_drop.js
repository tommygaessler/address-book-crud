'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(() => knex('addresses').del())
}
