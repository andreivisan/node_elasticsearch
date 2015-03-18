var express = require('express');
var router = express.Router();

var searchModule = require('../search_module/search.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/search-results', function(req, res) {
  searchModule.search(req.body, function(data) {
    res.render('index', { title: 'Express', results: data });
  });
});

module.exports = router;
