import _loginPage from '../support/_loginPage';
import _addClient from '../support/_addClient';

describe('Create client process', () => {
  const clientEmail = 'frantisekoch.rere@gmail.com';
  const clientFirstName = 'Roman';
  const clientLastName = 'Pech';

  beforeEach(function () {
    _loginPage.login();
  });

  it('Should create a new client', () => {
    _addClient.createClient(clientEmail, clientFirstName, clientLastName);
  });

  it('Should delete a new client', () => {
    _addClient.deleteClient(clientLastName);
  });

});
