var express = require('express');
var router = express.Router();
module.exports = router;
var app = require('../app.js');
var mongoUtil = require('../mongoUtil.js');
var db = mongoUtil.getDb();

app.get('/tenant-signup', function(req, res) {
  res.render('tenant/signup.ejs');
});


app.post('/tenant-signup', function(req, res) {
  db.collection('tenants').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/tenant-login');
  });
});

app.get('/tenant-login', function(req, res) {
  res.render('tenant/login.ejs');
});


app.post('/tenant-login', function(req, res) {
  db.collection('tenants').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/listed-properties');
  });
});
