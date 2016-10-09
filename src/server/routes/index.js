const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const states = require('../lib/states').states;

router.get('/', (req, res, next) => {
  knex('contacts')
  .select('contacts.id AS contact_id', 'addresses.id AS address_id', '*')
  .innerJoin('addresses', 'addresses.id', 'contacts.address_id')
  .orderBy('first_name', 'asc')
  .then((contacts) => {
    const contactsObject = {};
    contactsObject.title = 'Contacts';
    contactsObject.contacts = contacts;
    contactsObject.states = states;
    res.render('index', contactsObject);
  })
  .catch((error) => {
    console.log(error);
  });
});

router.post('/contacts/add', (req, res, next) => {
  console.log(req.body);
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const phone_number = req.body.phone_number;
  const email_address = req.body.email_address;
  const image_url = req.body.image_url;

  const line_1 = req.body.line_1;
  const line_2 = req.body.line_2;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;

  knex('addresses')
  .insert({
    line_1: line_1,
    line_2: line_2,
    city: city,
    state: state,
    zip: zip
  }, '*')
  .then((data) => {
    knex('contacts')
    .insert({
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      email_address: email_address,
      image_url: image_url,
      address_id: data[0].id
    })
    .then((data) => {
      res.redirect('/');
    });
  })
  .catch((error) => {
    console.log(error);
  });
});

router.put('/contacts/edit/:id', (req, res, next) => {

  const id = req.params.id;

  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const phone_number = req.body.phone_number;
  const email_address = req.body.email_address;
  const image_url = req.body.image_url;

  const line_1 = req.body.line_1;
  const line_2 = req.body.line_2;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;

  knex('addresses')
  .insert({
    line_1: line_1,
    line_2: line_2,
    city: city,
    state: state,
    zip: zip
  }, '*')
  .then((data) => {
    return knex('contacts')
    .where('id', id)
    .update({
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      email_address: email_address,
      image_url: image_url,
      address_id: data[0].id
    })
    .then((contact) => {
      res.send('success');
    });
  })
  .catch((error) => {
    console.log(error);
  });
});

router.delete('/contacts/delete/:id', (req, res, next) => {
  const id = req.params.id;

  knex('contacts')
  .where('id', id)
  .del()
  .returning('*')
  .then((contact) => {
    console.log(contact);
    res.json({
      message: id
    });
  })
  .catch((error) => {
    console.log(error);
  });
});

module.exports = router;
