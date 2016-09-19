const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res, next) => {
  knex('contacts')
  .innerJoin('addresses', 'addresses.id', 'contacts.address_id')
  .then((contacts) => {
    const contactsObject = {};
    contactsObject.title = 'Contacts';
    contactsObject.contacts = contacts;
    res.render('index', contactsObject);
  })
  .catch((error) => {
    console.log(error);
  });
});

module.exports = router;
