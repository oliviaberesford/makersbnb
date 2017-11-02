// 'use strict';
//
// const Browser = require('zombie');
// var expect = require('chai').expect;
// var app = require('../app');
// var assert = require('assert');
// var server;
//
// Browser.localhost('localhost:3000', 3000);
//
//  describe('user visits the sign up page', function() {
//
//    const browser = new Browser();
//
//    before(function(done) {
//     // server = app.listen(3000);
//      browser.visit('/', done);
//    });
//
//    after(function() {
//     //  server.close();
//      //drop database
//    });
//
//    describe('Sign up form', function() {
//      before(function(done) {
//        browser
//        .fill('emailAddress', 'tom@example.com')
//        .fill('password', 'password69')
//        .fill('confirmPassword', 'password69')
//        .pressButton('Sign Up', done);
//      });
//
//      it('should be successful', function(){
//        browser.assert.success();
//      });
//
//      it('should see welcome page', function(){
//        browser.assert.text('title', 'hello');
//      });
//
//   });
//
//  });
