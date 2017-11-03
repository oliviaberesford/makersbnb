// var express = require('express');
// var router = express.Router();
// // var passport = require('passport');
// // module.exports = router;
// var app = require('../app.js');
// var mongoUtil = require('../config/database.js');
// var db = mongoUtil.getDb();

module.exports = function(app, passport) {
console.log(passport);
app.get('/tenant/tenant-signup', function(req, res) {
  console.log("tenant sign up");
  res.render('tenant/tenantsignup.ejs');
});

app.post('/tenant/tenant-signup', passport.authenticate('tenant-signup', {

        successRedirect : '/tenant/tenant-profile',
        failureRedirect : '/tenant/tenant-signup',
        // failureFlash : true
    }));

app.get('/tenant/tenant-login', function(req, res) {
  res.render('tenant/tenantlogin.ejs');
});

app.post('/tenant/tenant-login', passport.authenticate('tenant-login', {
        successRedirect : '/tenant/tenant-profile',
        failureRedirect : '/tenant/tenant-login',
        // failureFlash : true
    }));

// new
app.get('/tenant/tenant-profile', isLoggedIn, function(req, res) {
  res.render('tenant/tenantprofile.ejs', {
    user : req.user
    });
  });

  app.get('/tenant/tenant-logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
  };

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}
