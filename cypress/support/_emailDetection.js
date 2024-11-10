class _emailDetection {
    constructor() {
        this.url = 'https://www.trainerize.com/';
        this.cookie = '//*[@id="onetrust-accept-btn-handler"]';
        this.openNavMenu = '//*[@id="navHeader"]/button';
        this.openSignInMenu = '//*[@id="navHeader"]/div[2]/ul/li[7]/a';
        this.emailDescription = '//input[@placeholder="Enter your email"]';
        this.enterEmail = '//*[@id="b_findurl"]';

        this.rightEmail = 'frantisekoch.fit@gmail.com';
        this.wrongEmail = 'frantisekoch.rere@gmail.com';

        this.passedLogin = '//*[@id="d_success"]';
        this.failedLogin = '//*[@id="d_error"]';
        this.verifyVisible = 'be.visible';
    }

    successfulLogin() {
        cy.visit(this.url);
        cy.xpath(this.cookie).click();
        cy.xpath(this.openNavMenu).click();
        cy.xpath(this.openSignInMenu).click();
        cy.xpath(this.emailDescription).type(this.rightEmail);
        cy.xpath(this.enterEmail).click();
        cy.xpath(this.passedLogin).should(this.verifyVisible);
    }

    unSuccessfulLogin() {
        cy.visit(this.url);
        cy.xpath(this.cookie).click();
        cy.xpath(this.openNavMenu).click();
        cy.xpath(this.openSignInMenu).click();
        cy.xpath(this.emailDescription).type(this.wrongEmail);
        cy.xpath(this.enterEmail).click();
        cy.xpath(this.failedLogin).should(this.verifyVisible);
    }
}

export default new _emailDetection();
