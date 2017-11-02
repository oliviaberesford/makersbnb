var express = require('express');
var router = express.Router();
module.exports = router;
var app = require('../app.js');
var mongoUtil = require('../mongoUtil.js');
var db = mongoUtil.getDb();


app.get('/signup', function(req, res) {
  res.render('signup.ejs');
});


app.post('/signup', function(req, res) {
  db.collection('landlords').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/login');
  });
});

app.get('/login', function(req, res) {
  res.render('login.ejs');
});


app.post('/login', function(req, res) {
  db.collection('landlords').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/listed-properties');
  });
});


app.get('/listed-properties', function(req, res) {
  db.collection('properties').find().toArray(function(err, result) {
    if (err) return console.log(err);
    res.render('index.ejs', {properties: result});
  });
});

app.get('/new-property', function(req, res) {
  res.render('new.ejs');
});

app.post('/new-properties', (req, res) => {
  db.collection('properties').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/listed-properties');
  });
});
