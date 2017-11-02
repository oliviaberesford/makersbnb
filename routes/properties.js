var express = require('express');
var router = express.Router();
module.exports = router;
var app = require('../app.js');
var mongoUtil = require( '../mongoUtil.js' );
var db = mongoUtil.getDb();
// console.log(db);
// var MongoClient = require('mongodb').MongoClient;
//
// var db;
// MongoClient.connect('mongodb://localhost:27017/makersbnb', (err, database) => {
//   if (err) return console.log(err);
//   db = database;
//   app.listen(3000, () => {
//     console.log('listening on 3000');
//   });
//   // console.log(db);
// });

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
