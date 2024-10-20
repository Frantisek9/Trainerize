class _findEmail {
    constructor() {
        this.url = 'https://www.trainerize.com/';
        this.cookie = '#onetrust-accept-btn-handler';
        this.openNavMenu = '#navHeader > button';
        this.openSignInMenu = '#navHeader > div.navbar-collapse.navHeaderCollapse.collapse.in > ul > li:nth-child(7) > a';
        this.emailDescription = '#t_email';
        this.enterEmail = '#b_findurl';
    }

    findLoginPage(email) {
        cy.visit(this.url);
        cy.get(this.cookie).click()
        cy.get(this.openNavMenu).click();
        cy.get(this.openSignInMenu).click();
        cy.get(this.emailDescription).type(email);
        cy.get(this.enterEmail).click();
    }
}

export default new _findEmail();
