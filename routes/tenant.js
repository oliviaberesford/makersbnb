var express = require('express');
var router = express.Router();
module.exports = router;
var app = require('../app.js');
var mongoUtil = require('../config/database.js');
var db = mongoUtil.getDb();

app.get('/tenant/tenant-signup', function(req, res) {
  res.render('tenant/tenantsignup.ejs');
});


app.post('/tenant/tenant-signup', function(req, res) {
  db.collection('tenants').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/tenant-login');
  });
});

app.get('/tenant/tenant-login', function(req, res) {
  res.render('tenant/tenantlogin.ejs');
});


app.post('/tenant/tenant-login', function(req, res) {
  db.collection('tenants').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/tenant/tenant-profile');
  });
});


app.get('/tenant/tenant-profile', function(req, res) {
  res.render('tenant/tenantprofile.ejs');
});
