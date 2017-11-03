var express = require('express');
var router = express.Router();
// module.exports = router;
var app = require('../app.js');
var mongoUtil = require('../config/database.js');
var db = mongoUtil.getDb();

module.exports = function(app, passport) {

app.get('/tenant-signup', function(req, res) {
  res.render('tenant/tenantsignup.ejs', { message: req.flash('signupMessage') });
});


app.post('/tenant-signup', passport.authenticate('local-signup', {
        successRedirect : '/tenant-profile',
        failureRedirect : '/tenant-signup',
        failureFlash : true
    }));

// app.post('/tenant-signup', function(req, res) {
//   db.collection('tenants').save(req.body, (err, result) => {
//     if (err) return console.log(err);
//     console.log('saved to database');
//     res.redirect('/tenant-login');
//   });
// });

app.get('/tenant-login', function(req, res) {
  res.render('tenant/tenantlogin.ejs', { message: req.flash('loginMessage') });
});


app.post('/tenant-login', function(req, res) {
  db.collection('tenants').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/tenant-profile');
  });
});

// new
app.get('/tenant-profile', isLoggedIn, function(req, res) {
  res.render('profile.ejs', {
    user : req.user
    });
  });

  app.get('/tenant-logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

  };

  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
