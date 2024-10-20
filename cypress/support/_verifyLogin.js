class _verifyLogin {
  constructor() {
    this.putEmail = '#t_user';
    this.putPassword = '#t_pwd';
    this.enterLogin = '#b_logon';
  }

  verifyLoginOptions(email, password) {
    cy.visit('https://frank45.trainerize.com/app/logon.aspx');
    cy.get(this.putEmail).type(email);
    cy.get(this.putPassword).type(password);
    cy.get(this.enterLogin).click();
  }
}

export default new _verifyLogin();
