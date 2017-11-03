var express = require('express');
var router = express.Router();
var passport = require('passport');
// module.exports = router;
var app = require('../app.js');
var mongoUtil = require('../config/database.js');
var db = mongoUtil.getDb();

module.exports = function(app, passport) {

app.get('/tenant/tenant-signup', function(req, res) {
  res.render('tenant/tenantsignup.ejs');
});

app.post('/tenant/tenant-signup', passport.authenticate('local-signup', {
        successRedirect : '/tenant/tenant-profile',
        failureRedirect : '/tenant/tenant-signup',
        failureFlash : true
    }));

app.get('/tenant/tenant-login', function(req, res) {
  res.render('tenant/tenantlogin.ejs');
});

app.post('/tenant/tenant-login', passport.authenticate('local-login', {
        successRedirect : '/tenant/tenant-profile',
        failureRedirect : '/tenant/tenant-login',
        failureFlash : true
    }));

// new
app.get('/tenant-profile', isLoggedIn, function(req, res) {
  res.render('tenant/tenantprofile.ejs', {
    user : req.user
    });
  });

  app.get('/tenant-logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
  };

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}
