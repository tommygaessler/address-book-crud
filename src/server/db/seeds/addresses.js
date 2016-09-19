exports.seed = function(knex, Promise) {

  return knex('addresses').del()
    .then(function () {
      return Promise.all([

        knex('addresses')
        .insert({
          line_1: '5615 Vistancia Drive',
          line_2: '',
          city: 'Parker',
          state: 'CO',
          zip: '80134'
        }),

        knex('addresses')
        .insert({
          line_1: '1062 Delaware St',
          line_2: '',
          city: 'Denver',
          state: 'CO',
          zip: '80204'
        }),

        knex('addresses')
        .insert({
          line_1: '6400 S Lewiston Way',
          line_2: '',
          city: 'Aurora',
          state: 'CO', 
          zip: '80016'
        })
      ]);
    });
};
