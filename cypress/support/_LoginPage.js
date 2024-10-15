class _LoginPage {
    constructor() {
      this.url = 'https://frank45.trainerize.com/app/logon.aspx';
      this.emailInput = '#t_user';
      this.passwordInput = '#t_pwd';
      this.loginButton = '#b_logon';
    }
  
    visit() {
      cy.visit(this.url);
    }
  
    login(email, password) {
      cy.get(this.emailInput).type(email);
      cy.get(this.passwordInput).type(password);
      cy.get(this.loginButton).click();
    }
  }
  
  export default new _LoginPage();
  