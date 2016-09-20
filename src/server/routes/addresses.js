const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/get/:id', (req, res, next) => {

  const id = req.params.id;

  knex('addresses')
  .where('id', id)
  .then((data) => {
    console.log(data);
    res.send(data[0]);
  })
  .catch((error) => {
    console.log(error);
  });
});

module.exports = router;
