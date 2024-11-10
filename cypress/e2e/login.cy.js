import _login from '../support/_login'; 

describe('Verify login tests', function () {

  beforeEach(function () {
  });

  it('Valid email and password', function () {
    _login.verifySuccessfulLogin();
  });

  it('Valid email, invalid password', function () {
    _login.verifyUnsuccessfulLoginWithInvalidPassword();
  });

  it('Invalid email, valid password', function () {
    _login.verifyUnsuccessfulLoginWithInvalidEmailAndPassword();
  });

}); 
