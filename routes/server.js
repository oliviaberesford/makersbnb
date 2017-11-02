var express = require('express');
var router = express.Router();
module.exports = router;
var app = require('../app.js');
var mongoUtil = require('../mongoUtil.js');
var db = mongoUtil.getDb();


app.get('/', function(req, res) {
  res.render('index.ejs');
});
