class _verifyLogin {
  constructor() {
    this.url = 'https://frank45.trainerize.com/app/logon.aspx';
    this.putEmail = '#t_user';
    this.putPassword = '#t_pwd';
    this.enterLogin = '#b_logon';

    this.successfulEmail = 'frantisekoch.fit@gmail.com';
    this.unSuccessfulEmail = 'frantisekoch.rere@gmail.com';
    this.validPassword = 'Fo111343234';
    this.invalidPassword = 'Petr4321';

    this.passedLogin = '#nav_clients';
    this.failedLogin = '#s_error';
    this.verifyVisible = 'be.visible';
  }

  verifySuccessfulLogin() {
    cy.visit(this.url);
    cy.get(this.putEmail).type(this.successfulEmail);
    cy.get(this.putPassword).type(this.validPassword);
    cy.get(this.enterLogin).click();
    cy.get(this.passedLogin).should(this.verifyVisible);
  }

  verifyUnsuccessfulLoginWithInvalidPassword() {
    cy.visit(this.url);
    cy.get(this.putEmail).type(this.successfulEmail);
    cy.get(this.putPassword).type(this.invalidPassword);
    cy.get(this.enterLogin).click();
    cy.get(this.failedLogin).should(this.verifyVisible);
  }

  verifyUnsuccessfulLoginWithInvalidEmailAndPassword() {
    cy.visit(this.url);
    cy.get(this.putEmail).type(this.unSuccessfulEmail);
    cy.get(this.putPassword).type(this.invalidPassword);
    cy.get(this.enterLogin).click();
    cy.get(this.failedLogin).should(this.verifyVisible);
  }
}

export default new _verifyLogin();

