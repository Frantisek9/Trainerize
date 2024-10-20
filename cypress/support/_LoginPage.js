class _loginPage {
  constructor() {
    this.putEmail = '#t_user';
    this.putPassword = '#t_pwd';
    this.loginButton = '#b_logon';
  }

  login() {
    cy.visit('https://frank45.trainerize.com/app/logon.aspx');
    cy.get(this.putEmail).type('frantisekoch.fit@gmail.com');
    cy.get(this.putPassword).type('Fo111343234');
    cy.get(this.loginButton).click();
  }
}

export default new _loginPage();
