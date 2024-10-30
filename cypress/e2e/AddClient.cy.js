import _loginPage from '../support/_loginPage';
import _addClient from '../support/_addClient';

describe('Create client process', () => {

  beforeEach(function () {
    _loginPage.login();
  });

  it('Should create a new client', () => {
    _addClient.createClient();
  });

  it('Should delete a new client', () => {
    _addClient.deleteClient();
  });

});
