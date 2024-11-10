class _addClient {
  constructor() {


    
    this.clientNav = '#nav_clients';
    this.addClient = '#clientGrid__toolbar_addClient';
    this.clientEmail = '[data-testid="addClientDialog-emailInput"]';
    this.theEmail = 'frantisekoch.rere@gmail.com';
    this.clientFirstName = '[data-testid="addClientDialog-firstNameInput"]';
    this.theFirsthName = 'Roman';
    this.clientLastName = '[data-testid="addClientDialog-lastNameInput"]';
    this.theLastName = 'Pech';
    this.saveNewClient = '.btn--blue';

    this.searchClients = '#baseGrid_searchBar_container > input';
    this.clientName = 'Roman Pech'
    this.openClientAcc = '#clientList';
    this.openAccOptions = '[data-testid="clientProfileDialog-modalMenu-moreActions"]';
    this.deleteClientAcc = 'body > div:nth-child(22) > div > div > ul > li:nth-child(2)';
    this.confirmDeleteAcc = 'body > div:nth-child(24) > div > div.modal-wrap.modal-centered > div > div.modal-content > div.modal-footer > div > div > button.ant-btn.btn.btn--medium.btn--red.mr8.ant-btn-button';
    this.verifyDeletedAcc = '#clientList';
    this.clientDeleteName = 'Roman Pech';

  }

  createClient() {
    cy.get(this.clientNav).click();
    cy.get(this.addClient).click();
    cy.get(this.clientEmail).type(this.theEmail);
    cy.get(this.clientFirstName).type(this.theFirsthName);
    cy.get(this.clientLastName).type(this.theLastName);
    cy.get(this.saveNewClient).click();
    cy.wait(3000);
  }

  deleteClient() {
    cy.get(this.clientNav).click();
    cy.get(this.searchClients).type(this.clientName);
    cy.wait(3000);
    cy.get(this.openClientAcc).contains(this.clientDeleteName).click();
    cy.get(this.openAccOptions).click();
    cy.get(this.deleteClientAcc).click();
    cy.get(this.confirmDeleteAcc).click();
    cy.wait(3000);

  }
}

export default new _addClient();
