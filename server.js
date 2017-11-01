const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs')

var db
MongoClient.connect('mongodb://localhost:27017/makersbnb', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/listed-properties', function(req, res) {
  db.collection('properties').find().toArray(function(err, result) {
    if (err) return console.log(err)
    res.render('property/index.ejs', {
      landlord: result
    })
  })
});

app.get('/new-property', function(req, res) {
  res.render('property/new.ejs')
});

app.post('/new-properties', (req, res) => {
  db.collection('properties').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/listed-properties')
  })
});
