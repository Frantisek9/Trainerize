import _findEmail from '../support/_findEmail';

describe('Find Email Test', function () {
    const validEmail = 'frantisekoch.fit@gmail.com';
    const invalidEmail = 'frantisekoch.rere@gmail.com';

    beforeEach(function () {
        this.passedLogin = '#d_success';
        this.failedLogin = '#d_error';
        this.verifyVisible = 'be.visible';
    });

    it('Should successfully find email', function () {
        _findEmail.findLoginPage(validEmail);
        cy.get(this.passedLogin).should(this.verifyVisible);
    });

    it('Should error for invalid email', function () {
        _findEmail.findLoginPage(invalidEmail);
        cy.get(this.failedLogin).should(this.verifyVisible);
    });
});
