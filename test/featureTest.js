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

  describe('Homepage', function() {
    before(function(done) {
      this.browser.visit('/', done);
    });

    it('should be successful', function() {
      this.browser.assert.success();
    });

    it('should see welcome page text', function() {
     this.browser.assert.text('h1', 'Welcome to Makers BNB');
   });

    it('should display login and signup buttons', function(done) {
      // this.browser.fill('emailAddress', 'email@example.com')
      // this.browser.fill('password', 'password69')
      // this.browser.fill('confirmPassword', 'password69')
      // this.browser.assert.element('Tenant Login');
      this.browser.pressButton('Tenant Login', done);
      this.browser.pressButton('Tenant Signup', done);
      this.browser.pressButton('Landlord Login', done);
      this.browser.pressButton('Landlord Signup', done);
    });

  });


  describe('Tenant Login', function() {
    before(function(done) {
      this.browser.visit('/tenant-login', done);
    });

    it('should log in a user', function(done) {
      this.browser.fill('email', 'email@example.com')
      this.browser.fill('password', 'password69')
      this.browser.pressButton('Login', done);
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


  after(function(done) {
    this.server.close(done);
  });

});
