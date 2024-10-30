class _findEmail {
    constructor() {
        this.url = 'https://www.trainerize.com/';
        this.cookie = '#onetrust-accept-btn-handler';
        this.openNavMenu = '#navHeader > button';
        this.openSignInMenu = '#navHeader > div.navbar-collapse.navHeaderCollapse.collapse.in > ul > li:nth-child(7) > a';
        this.emailDescription = '#t_email';
        this.enterEmail = '#b_findurl';

        this.rightEmail = 'frantisekoch.fit@gmail.com'
        this.wrongEmail = 'frantisekoch.rere@gmail.com'

        this.passedLogin = '#d_success';
        this.failedLogin = '#d_error';
        this.verifyVisible = 'be.visible';
    }

    successfulLogin() {
        cy.visit(this.url);
        cy.get(this.cookie).click()
        cy.get(this.openNavMenu).click();
        cy.get(this.openSignInMenu).click();
        cy.get(this.emailDescription).type(this.rightEmail);
        cy.get(this.enterEmail).click();
        cy.get(this.passedLogin).should(this.verifyVisible);
    }

    unSuccessfulLogin() {
        cy.visit(this.url);
        cy.get(this.cookie).click()
        cy.get(this.openNavMenu).click();
        cy.get(this.openSignInMenu).click();
        cy.get(this.emailDescription).type(this.wrongEmail);
        cy.get(this.enterEmail).click();
        cy.get(this.failedLogin).should(this.verifyVisible);
    }

}

export default new _findEmail();
