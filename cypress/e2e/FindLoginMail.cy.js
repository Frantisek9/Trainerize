import _FindLoginMail from '../support/_FindLoginMail'; 

describe('Find Login Email Test', () => {

    beforeEach(() => {
        _FindLoginMail.visitFindMailPage();
    });

    it('Should successfully find mail', () => {
        _FindLoginMail.enterEmailAdress('frantisekoch.fit@gmail.com');
        cy.get('body').should('exist');
    });

    it('Should fail to find email (error mail)', () => {
        _FindLoginMail.enterEmailAdress('frantisekoch.rere@gmail.com');
        cy.get('#d_error').should('exist');
    });

    it('Should fail to find email (empty mail)', () => {
      _FindLoginMail.enterEmailAdress('frantisekoch.rere@gmail.com');
      cy.get('#d_error').should('exist');
  });


});
