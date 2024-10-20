import _verifyLogin from '../support/_verifyLogin'; 

describe('Verify login tests', function () {
  const validEmail = 'frantisekoch.fit@gmail.com';
  const invalidEmail = 'frantisekoch.rere@gmail.com';
  const emptyEmail = '';

  const validPassword = 'Fo111343234';
  const invalidPassword = 'Petr4321';

  beforeEach(function () {
    this.passedLogin = '#nav_clients'; 
    this.failedLogin = '#s_error'; 
  });

  it('Valid email and password', function () {
    _verifyLogin.verifyLoginOptions(validEmail, validPassword);
    cy.get(this.passedLogin).should('be.visible');
  });

  it('Valid email, invalid password', function () {
    _verifyLogin.verifyLoginOptions(validEmail, invalidPassword);
    cy.get(this.failedLogin).should('be.visible');
  });

  it('Invalid email, valid password', function () {
    _verifyLogin.verifyLoginOptions(invalidEmail, validPassword);
    cy.get(this.failedLogin).should('be.visible');
  });

});
