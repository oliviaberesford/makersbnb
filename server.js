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

app.get('/', function(req, res) {
  // res.sendFile(__dirname + '/index.html')
  db.collection('landlord').find().toArray(function(err, result) {
    // console.log(results)
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {landlord: result})
  })
});


app.post('/landlord', (req, res) => {
  db.collection('landlord').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
});
