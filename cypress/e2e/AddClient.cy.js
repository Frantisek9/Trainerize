import _LoginPage from '../support/_LoginPage';
import _AddClient from '../support/_AddClient';

describe('Client Management Tests', () => {
  it('should log in and create a new client', () => {

    _LoginPage.visit();
    _LoginPage.login('frantisekoch.fit@gmail.com', 'Fo111343234');

    _AddClient.createClient('RomanPech.fit@gmail.com', 'Roman', 'Pech');
  });

  it('should delete the created client', () => {

    _LoginPage.visit();
    _LoginPage.login('frantisekoch.fit@gmail.com', 'Fo111343234');

    _AddClient.deleteClient('Roman Pech');
  });
});
