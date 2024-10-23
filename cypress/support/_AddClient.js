class _addClient {
  constructor() {
    this.clientNav = '#nav_clients';
    this.addClient = '#clientGrid__toolbar_addClient';
    this.clientEmail = '[data-testid="addClientDialog-emailInput"]';
    this.clientFirstName = '[data-testid="addClientDialog-firstNameInput"]';
    this.clientLastName = '[data-testid="addClientDialog-lastNameInput"]';
    this.saveNewClient = '.btn--blue';

    this.searchClients = '#baseGrid_searchBar_container > input';
    this.openClientAcc = '#clientList';
    this.openAccOptions = '[data-testid="clientProfileDialog-modalMenu-moreActions"]';
    this.deleteClientAcc = 'body > div:nth-child(22) > div > div > ul > li:nth-child(2)';
    this.confirmDeleteAcc = 'body > div:nth-child(24) > div > div.modal-wrap.modal-centered > div > div.modal-content > div.modal-footer > div > div > button.ant-btn.btn.btn--medium.btn--red.mr8.ant-btn-button';
    this.verifyDeletedAcc = '#clientList';
    this.clientDeleteName = 'Roman Pech';

  }

  createClient(email, firstName, lastName) {
    cy.get(this.clientNav).click();
    cy.get(this.addClient).click();
    cy.get(this.clientEmail).type(email);
    cy.get(this.clientFirstName).type(firstName);
    cy.get(this.clientLastName).type(lastName);
    cy.get(this.saveNewClient).click();
    cy.wait(3000);
  }

  deleteClient(clientLastName) {
    cy.get(this.clientNav).click();
    cy.get(this.searchClients).type(clientLastName);
    cy.wait(3000);
    cy.get(this.openClientAcc).contains(this.clientDeleteName).click();
    cy.get(this.openAccOptions).click();
    cy.get(this.deleteClientAcc).click();
    cy.get(this.confirmDeleteAcc).click();
    cy.wait(3000);

  }
}

export default new _addClient();
