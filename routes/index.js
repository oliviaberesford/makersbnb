var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/post-property', function(req, res, next) {
  res.render('post-property', { title: 'Express' });
});

router.get('/view-properties', function(req, res, next) {
  res.render('view-properties', { title: 'Express' });
});


module.exports = router;
