class _TestLogin {

constructor() {
this.url = 'https://frank45.trainerize.com/app/logon.aspx';
this.emailText = '#t_user';
this.TextPassWord = '#t_pwd';
this.LogButton = '#b_logon';
this.errorSelector = '#s_error';
} 

  visitLoginPage(email, password) { 
    cy.visit(this.url);
    cy.get(this.emailText).type(email);
    
    if (password) {
      cy.get(this.TextPassWord).type(password);
    }
  
    cy.get(this.LogButton).click();
  }

  verifyLoginError() {
    cy.get(this.errorSelector).should('exist');
  }
}

export default new _TestLogin();
