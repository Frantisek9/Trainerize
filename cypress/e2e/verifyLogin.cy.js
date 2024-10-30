import _verifyLogin from '../support/_verifyLogin'; 

describe('Verify login tests', function () {

  beforeEach(function () {
  });

  it('Valid email and password', function () {
    _verifyLogin.verifySuccessfulLogin();
  });

  it('Valid email, invalid password', function () {
    _verifyLogin.verifyUnsuccessfulLoginWithInvalidPassword();
  });

  it('Invalid email, valid password', function () {
    _verifyLogin.verifyUnsuccessfulLoginWithInvalidEmailAndPassword();
  });

}); 
