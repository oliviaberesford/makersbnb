var express = require('express');
var router = express.Router();
module.exports = router;
var app = require('../app.js');
var mongoUtil = require('../config/database.js');
var db = mongoUtil.getDb();

app.get('/landlord-signup', function(req, res) {
  res.render('landlord/landlordsignup.ejs');
});


app.post('/landlord-signup', function(req, res) {
  db.collection('landlords').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/landlord-login');
  });
});

app.get('/landlord-login', function(req, res) {
  res.render('landlord/landlordlogin.ejs');
});


app.post('/landlord-login', function(req, res) {
  db.collection('landlords').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/landlord-profile');
  });
});

app.get('/landlord-profile', function(req, res) {
  res.render('landlord/landlordprofile.ejs');
});
