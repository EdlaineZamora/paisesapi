var express = require('express');
var router = express.Router();

var country = require('./../data/country.json');

router.get('/', function(req, res, next) {
  res.send(country);
});

module.exports = router;
