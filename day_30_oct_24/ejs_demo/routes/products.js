var express = require('express');
var router = express.Router();
var products = require('../data/products.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('pages/products.ejs',{products});
});

module.exports = router;
