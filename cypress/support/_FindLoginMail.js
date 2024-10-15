class _FindLoginMail {

constructor() {
this.url = 'https://www.trainerize.com/'
this.AcceptCookies = '#onetrust-accept-btn-handler'
this.OpenNavMenu = '#navHeader > button'
this.OpenSignInMenu = '#navHeader > div.navbar-collapse.navHeaderCollapse.collapse.in > ul > li:nth-child(7) > a'
this.TextForEmail = '#t_email'
this.FindEmailButton = '#b_findurl'


}

visitFindMailPage() {
    cy.visit(this.url);
    cy.get(this.AcceptCookies).click();
    cy.get(this.OpenNavMenu).click();
    cy.get(this.OpenSignInMenu).click();
}

enterEmailAdress(email) {
if (email) {
    cy.get(this.TextForEmail).type(email);
}
    cy.get(this.FindEmailButton).click();

}}

export default new _FindLoginMail();