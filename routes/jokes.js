// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('How do you catch a unique rabbit?');
})

router.get('/answer', function (req, res) {
  res.send('Unique up on him.');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this joke...');
})

module.exports = router;