import _emailDetection from '../support/_emailDetection';

describe('Find Email Test', function () {

    beforeEach(function () {
    });

    it('Should successfully find email', function () {
        _emailDetection.successfulLogin();;
    });
    
    it('Should error for invalid email', function () {
        _emailDetection.unSuccessfulLogin();
    });
});