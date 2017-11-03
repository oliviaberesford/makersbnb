var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var mongoUtil = require('./config/database.js');

// new suff
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash    = require('connect-flash');
var session  = require('express-session');
require('./routes/tenant.js')(app, passport);
require('./config/passport')(passport);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
secret: 'supersecret',
cookie: { maxAge: 60000 },
resave: true,
saveUninitialized: true }));
app.use(flash());
//
app.use(bodyParser.urlencoded({extended: true}));

mongoUtil.connectToServer(function(err) {
  // start the rest of your app here
  app.listen(3000, () => {
    console.log('listening on 3000');
  });

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

module.exports = app;

var properties = require('./routes/properties');
var landlord = require('./routes/landlord');
var tenant = require('./routes/tenant');
var server = require('./routes/server');
var user = require('./models/user.js');
app.use('/user', user);
app.use('/properties', properties);
app.use('/landlord', landlord);
app.use('/tenant', tenant);
app.use('/server', server);

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
  extended: false
  }));
  app.use(express.static(path.join(__dirname, 'public')));


  // catch 404 and forward to error handler
app.use(function(req, res, next) {
var err = new Error('Not Found');
err.status = 404;
next(err);
});

  // error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  });
});
