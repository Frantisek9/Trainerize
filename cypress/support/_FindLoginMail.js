class _FindLoginMail {

visitFindMailPage() {
    cy.visit('https://www.trainerize.com/');
    cy.get('#onetrust-accept-btn-handler');
    cy.get('#navHeader > button').click();
    cy.get('#navHeader > div.navbar-collapse.navHeaderCollapse.collapse.in > ul > li:nth-child(7) > a').click();
    cy.get('#t_email');
}

enterEmailAdress(email) {
if (email) {
    cy.get('#t_email').type(email);
}

cy.get('#b_findurl').click();

}}

export default new _FindLoginMail();