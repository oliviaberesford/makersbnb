const Nightmare = require('nightmare')
const assert = require('assert')
const chai = require('chai')

describe('Load a Page', function(){
  this.timeout('30s')

    let nightmare = null

    beforeEach(() => {
      nightmare = new Nightmare()
    })

    describe('/', () => {
      it('should take new user sign up details and redirect them to the login page', done => {
      nightmare.goto('http://localhost:3000')
      .type('.signup-email-input', 'oliver@gmail.com')
      .type('.signup-password-input', 'password')
      .type('.signup-password-confirm-input', 'valid password')
      .click('.signup-submit')
      .click('.login')
      .end()
      .then(result => { done() })
      .catch(done)
      })
    })

    describe('/login', () => {
      it('should log in new user with user details', done => {
      nightmare.goto('http://localhost:3000/login')
      .type('.login-email-input', 'oliver@gmail.com')
      .type('.login-password-input', 'password')
      .click('.login-submit')
      .end()
      .then(result => { done() })
      .catch(done)
      })
    })

})
