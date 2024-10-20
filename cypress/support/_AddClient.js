class _addClient {
  constructor() {
    this.clientNav = '#nav_clients';
    this.addClient = '#clientGrid__toolbar_addClient';
    this.clientEmail = '[data-testid="addClientDialog-emailInput"]';
    this.clientFirstName = '[data-testid="addClientDialog-firstNameInput"]';
    this.clientLastName = '[data-testid="addClientDialog-lastNameInput"]';
    this.saveNewClient = '.btn--blue';

    this.searchClients = '#baseGrid_searchBar_container > input';
    this.openClientAcc = '#clientGrid_item_20122126 > div > div.clientGrid-static-clientDetail.flex-left.flex-align-center > div.flex-left.flex-top.flex-column.ml8.text-overflow-none > p > a';
    this.openAccOptions = 'body > div:nth-child(20) > div > div.modal-wrap.modal-centered.modal-profile > div > div.modal-content > div > div.modalTabs > div.modalMenu.flex-self-right > div > button:nth-child(5)';
    this.deleteClientAcc = 'body > div:nth-child(22) > div > div > ul > li:nth-child(2)';
    this.confirmDeleteAcc = 'body > div:nth-child(24) > div > div.modal-wrap.modal-centered > div > div.modal-content > div.modal-footer > div > div > button.ant-btn.btn.btn--medium.btn--red.mr8.ant-btn-button';


  }

  createClient(email, firstName, lastName) {
    cy.get(this.clientNav).click();
    cy.get(this.addClient).click();
    cy.get(this.clientEmail).type(email);
    cy.get(this.clientFirstName).type(firstName);
    cy.get(this.clientLastName).type(lastName);
    cy.get(this.saveNewClient).click();
  }

  deleteClient(clientLastName) {
    cy.get(this.clientNav).click();
    cy.get(this.searchClients).type(clientLastName);
    cy.get(this.openClientAcc).click();
    cy.get(this.openAccOptions).click();
    cy.get(this.deleteClientAcc).click();
    cy.get(this.confirmDeleteAcc).click();

  }
}

export default new _addClient();
