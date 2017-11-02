var express = require('express');
var router = express.Router();
module.exports = router;
var app = require('../app.js');
var mongoUtil = require('../mongoUtil.js');
var db = mongoUtil.getDb();

app.get('/landlord-signup', function(req, res) {
  res.render('landlord/signup.ejs');
});


app.post('/landlord-signup', function(req, res) {
  db.collection('landlords').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/login');
  });
});

app.get('/landlord-login', function(req, res) {
  res.render('landlord/login.ejs');
});


app.post('/landlord-login', function(req, res) {
  db.collection('landlords').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/new-property');
  });
});
