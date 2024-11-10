class _login {
  constructor() {
    this.url = 'https://frank45.trainerize.com/app/logon.aspx';
    this.putEmail = '//*[@id="t_user"]'

    this.putPassword = '//*[@id="t_pwd"]';
    this.enterLogin = '//*[@id="b_logon"]';

    this.successfulEmail = 'frantisekoch.fit@gmail.com';
    this.unSuccessfulEmail = 'frantisekoch.rere@gmail.com';
    this.validPassword = 'Fo111343234';
    this.invalidPassword = 'Petr4321';

    this.passedLogin = '//*[@class="overview-main border-box p16 fullContent"]';
    this.failedLogin = '//*[@id="s_error"]';

    this.verifyVisible = 'be.visible';
  }

  verifySuccessfulLogin() {
    cy.visit(this.url);
    cy.xpath(this.putEmail).type(this.successfulEmail);
    cy.xpath(this.putPassword).type(this.validPassword);
    cy.xpath(this.enterLogin).click();
    cy.xpath(this.passedLogin).should(this.verifyVisible);
  }

  verifyUnsuccessfulLoginWithInvalidPassword() {
    cy.visit(this.url);
    cy.xpath(this.putEmail).type(this.successfulEmail);
    cy.xpath(this.putPassword).type(this.invalidPassword);
    cy.xpath(this.enterLogin).click();
    cy.xpath(this.failedLogin).should(this.verifyVisible);
  }

  verifyUnsuccessfulLoginWithInvalidEmailAndPassword() {
    cy.visit(this.url);
    cy.xpath(this.putEmail).type(this.unSuccessfulEmail);
    cy.xpath(this.putPassword).type(this.invalidPassword);
    cy.xpath(this.enterLogin).click();
    cy.xpath(this.failedLogin).should(this.verifyVisible);
  }
}

export default new _login();

