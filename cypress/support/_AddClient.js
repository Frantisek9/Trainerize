class _AddClient {
    constructor() {
      this.clientNav = '#nav_clients';
      this.addClientButton = '#clientGrid__toolbar_addClient';
      this.emailInput = '[data-testid="addClientDialog-emailInput"]';
      this.firstNameInput = '[data-testid="addClientDialog-firstNameInput"]';
      this.lastNameInput = '[data-testid="addClientDialog-lastNameInput"]';
      this.saveButton = '.btn--blue';
      this.closeButton = '[data-testid="close-button"]';
      this.searchInput = '#baseGrid_searchBar_container > input';
      this.moreActionsButton = '[data-testid="clientProfileDialog-modalMenu-moreActions"]';
      this.deleteOption = '[data-testid="dropdownButton-menuItem-delete"]';
      this.confirmDeleteButton = '[data-testid="dialog-defaultFooter-confirm-button"]';
      this.clientlist = '#clientList';
    }
  
    clickClientsNav() {
      cy.get(this.clientNav).click();
    }
  
    createClient(email, firstName, lastName) {
      this.clickClientsNav();
      cy.get(this.addClientButton).click();
      cy.get(this.emailInput).type(email);
      cy.get(this.firstNameInput).type(firstName);
      cy.get(this.lastNameInput).type(lastName);
      cy.get(this.saveButton).click();
      cy.wait(2000);
      cy.get(this.closeButton).click();
      cy.wait(2000);
    }
  
    deleteClient(name) {
      this.clickClientsNav();
      cy.get(this.searchInput).type(name);
      cy.get(this.clientlist).contains(name).click();
      cy.get(this.moreActionsButton).click();
      cy.get(this.deleteOption).click();
      cy.get(this.confirmDeleteButton).click();
    }
  }
  
  export default new _AddClient();
  