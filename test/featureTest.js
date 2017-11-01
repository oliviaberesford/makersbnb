const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function(){
  this.timeout('30s')

    let nightmare = null

    beforeEach(() => {
      nightmare = new Nightmare()
    })

    // describe('/', () => {
    //   it('should load without error', done => {
    //   //need to update port.
    //   nightmare.goto('http://localhost:3000')
    //   .end()
    //   .then(function(result) { done() })
    //   .catch(done)
    //   })
    // })
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
})
