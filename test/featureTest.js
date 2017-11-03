hi
// force the test environment to 'test'
process.env.NODE_ENV = 'test';
var http = require('http');
// get the application server module
var app = require('../app');
// use zombie.js as headless browser
var Browser = require('zombie');
var assert = require('assert');


describe('makersbnb', function() {
  before(function() {
    this.server = http.createServer(app).listen(3000);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({
      site: 'http://localhost:3000'
    });
  });

  describe('Sign up', function() {
    before(function(done) {
      this.browser.visit('/', done);
    });

    it('should sign up new user', function(done) {
      this.browser.fill('emailAddress', 'email@example.com')
      this.browser.fill('password', 'password69')
      this.browser.fill('confirmPassword', 'password69')
      this.browser.pressButton('Sign Up', done);
    });


  describe('Login', function() {
    before(function(done) {
      this.browser.visit('/login', done);
    });

    it('should log in a user', function(done) {
      this.browser.fill('emailAddress', 'email@example.com')
      this.browser.fill('password', 'password69')
      this.browser.pressButton('Log in', done);
    });
  });

  describe('post-property', function() {
    before(function(done) {
      this.browser.visit('/post-property', done);
    });

    it('should log in a user', function(done) {
      this.browser.fill('property', 'big house')
      this.browser.pressButton('Add property', done);
    });
  });

  describe('view-properties', function() {
    before(function(done) {
      this.browser.visit('/view-properties', done);
    });

    it('shows user listed properties', function() {
      assert.ok(this.browser.success);
    });
  });

  });

  after(function(done) {
    this.server.close(done);
  });

});
