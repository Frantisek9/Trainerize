class _CreateClient {
    constructor() {
      this.clientData = "#nav_clients";
      this.searchInput = '#baseGrid_searchBar_container > input';
    }
  
    loginDashBoard(email, password) { 
      cy.visit('https://frank45.trainerize.com/app/logon.aspx');
      cy.get('#t_user').type(email);
      cy.get('#t_pwd').type(password);
      cy.get('#b_logon').click();
    }
  
    CreateNewClient(email, firstName, lastName) {
      cy.get(this.clientData).click();
      cy.get('#clientGrid__toolbar_addClient').click();
      cy.get('[data-testid="addClientDialog-emailInput"]').type(email);
      cy.get('[data-testid="addClientDialog-firstNameInput"]').type(firstName);
      cy.get('[data-testid="addClientDialog-lastNameInput"]').type(lastName);
      cy.get('.btn--blue').click();
      cy.wait(2000);
      cy.get('[data-testid="close-button"]').click();
      cy.wait(2000);
    }
  
    DeleteNewClient(name) {
      cy.get(this.clientData).click();
      cy.get(this.searchInput).type(name);
      cy.get('#clientList').contains(name).click();
      cy.get('[data-testid="clientProfileDialog-modalMenu-moreActions"]').click();
      cy.get('[data-testid="dropdownButton-menuItem-delete"]').click();
      cy.get('[data-testid="dialog-defaultFooter-confirm-button"]').click();
    }
  }
  
  export default new _CreateClient();
  