class _loginPage {
  constructor() {
    this.putEmail = '//*[@id="t_user"]';
    this.putPassword = '//*[@id="t_pwd"]';
    this.loginButton = '//*[@id="b_logon"]';
    this.verifyDashboard = '//*[@class="overview-main border-box p16 fullContent"]'

    this.email = 'frantisekoch.fit@gmail.com';
    this.password = 'Fo111343234';
    this.visible = 'be.vesible';
  }

  login() {
    cy.visit('https://frank45.trainerize.com/app/logon.aspx');
    cy.xpath(this.putEmail).type(this.email);
    cy.xpath(this.putPassword).type(this.password);
    cy.xpath(this.loginButton).click();
    cy.xpath(this.verifyDashboard).(this.vesible);
  }
}

export default new _loginPage();
