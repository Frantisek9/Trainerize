import _findEmail from '../support/_findEmail';

describe('Find Email Test', function () {

    beforeEach(function () {
    });

    it('Should successfully find email', function () {
        _findEmail.successfulLogin();;
    });
    
    it('Should error for invalid email', function () {
        _findEmail.unSuccessfulLogin();
    });
});
