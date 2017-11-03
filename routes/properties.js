var express = require('express');
var router = express.Router();
module.exports = router;
var app = require('../app.js');
var mongoUtil = require('../config/database.js');
var db = mongoUtil.getDb();


app.get('/listed-properties', function(req, res) {
  db.collection('properties').find().toArray(function(err, result) {
    if (err) return console.log(err);
    res.render('properties/listedproperties.ejs', {properties: result});
  });
});

app.get('/new-property', function(req, res) {
  res.render('properties/newPropertyListing.ejs');
});

app.post('/new-property', (req, res) => {
  db.collection('properties').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/listed-properties');
  });
});
