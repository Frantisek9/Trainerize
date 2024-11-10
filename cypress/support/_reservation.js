class _reservation {
  constructor() {
    this.url = 'https://frank45.trainerize.com/app/logon.aspx';
    this.putEmail = '//*[@id="t_user"]';
    this.putPassword = '//*[@id="t_pwd"]';
    this.loginButton = '//*[@id="b_logon"]';

    this.email = 'frantisekoch.fitness@gmail.com';
    this.password = 'Fanda1998';
    this.visible = 'be.visible';

    this.reserveButton = '//*[@class="thingsToDo flex-center"]';
    this.appointmentButton = '//p[@class="tz-p" and text()="Appointment"]'
    this.lessonType = '//div[@class="ant-select-selection__placeholder"]';
    this.pragueKarlin = '//*[@title="In-person session (Prague)"]';
    this.timeButton = '//div[@class="flex-center mr8 m8b "]';
    this.bookButton = '//button[@data-testid="dialog-defaultFooter-confirm-button"]';
  }

  login() {
    cy.visit(this.url);
    cy.xpath(this.putEmail).type(this.email);
    cy.xpath(this.putPassword).type(this.password);
    cy.xpath(this.loginButton).click();
  }

  reservation() {
    cy.xpath(this.reserveButton).click();
    cy.xpath(this.appointmentButton).should(this.visible).click();
    cy.xpath(this.lessonType).click();
    cy.xpath(this.pragueKarlin).click();
    cy.xpath(this.timeButton).click();
    cy.xpath(this.bookButton).click();

  }
}

export default new _reservation();
