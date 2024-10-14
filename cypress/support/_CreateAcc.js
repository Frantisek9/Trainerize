class _CreateAcc {

  visitLoginPage(email, password) { 
    cy.visit('https://frank45.trainerize.com/app/logon.aspx');
    cy.get('#t_user').type(email);
    
    if (password) {
      cy.get('#t_pwd').type(password);
    }
  
    cy.get('#b_logon').click();
  }

  verifyLoginError() {
    cy.get('#s_error').should('exist');
  }
}

export default new _CreateAcc();
