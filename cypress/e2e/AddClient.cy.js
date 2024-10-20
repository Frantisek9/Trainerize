import _loginPage from '../support/_loginPage';
import _addClient from '../support/_addClient';

describe('Create client process', () => {
  const clientEmail = 'frantisekoch.rere@gmail.com';
  const clientFirstName = 'Roman';
  const clientLastName = 'Pech';

  beforeEach(function () {
    _loginPage.login();
    this.successfulLogin = 'body > div:nth-child(23) > div > div.modal-wrap.modal-centered > div > div.modal-content > div';
    this.failedLogin = '#trGrid_content';
  });

  it('Should create a new client', () => {
    _addClient.createClient(clientEmail, clientFirstName, clientLastName);
    cy.get(this.successfulLogin).should('be.visible');
  });

  it('Should delete a new client', () => {
    _addClient.deleteClient(clientLastName);
    cy.get(this.failedLogin).should('not.be.visible');
  });

});
