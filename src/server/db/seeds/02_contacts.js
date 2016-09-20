
'use strict'

exports.seed = (knex, Promise) => {
  return knex('addresses').then(addresses => {

    return Promise.all([

      knex('contacts')
      .insert({
        first_name: 'Tommy',
        last_name: 'Gaessler',
        phone_number: '303-565-0001',
        email_address: 'tommy.gaessler@me.com',
        image_url: 'http://tommygaessler.com/wp-content/themes/tommygaessler/images/profile.jpg',
        address_id: addresses[0].id
      }),

      knex('contacts')
      .insert({
        first_name: 'Wes',
        last_name: 'Reid',
        phone_number: '303-010-1234',
        email_address: 'wes@galvanize.com',
        image_url: 'https://avatars2.githubusercontent.com/u/1316902?v=3&s=466',
        address_id: addresses[1].id
      }),

      knex('contacts')
      .insert({
        first_name: 'Dean',
        last_name: 'Doherty',
        phone_number: '303-122-3111',
        email_address: 'ddoherty@regisjesuit.com',
        image_url: 'https://pmctvline2.files.wordpress.com/2016/06/person-of-interest-series-finale-reese.jpg',
        address_id: addresses[2].id
      })
    ]);
  })
}
