const express = require('express');
const MyData = require('../models/myData');

const router = express.Router();

router.post('/api/data', (req, res) => {
  const myData = new MyData(req.body);

  myData.save()
    .then(() => {
      res.send('Data inserted successfully');
    })
    .catch((err) => {
      res.status(400).send('Unable to insert data');
    });
});

module.exports = router;
