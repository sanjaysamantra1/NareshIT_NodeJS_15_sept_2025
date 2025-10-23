var express = require('express');
var router = express.Router();

let users = ['Ravikiran', 'Ramaswamy', 'Nitin', 'Rahman']

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users', { users });
});

module.exports = router;
