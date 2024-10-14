import _CreateAcc from '../support/_CreateAcc'; 

describe('Trainerize Login Tests', () => {
  const email = 'frantisekoch.fit@gmail.com'; 

  it('Valid email and password', () => {
    _CreateAcc.visitLoginPage(email, 'Fo111343234');
    cy.get('#nav_clients').click()
  });

  it('Valid email and wrong password', () => {
    _CreateAcc.visitLoginPage(email, 'frantisekochh@gmail.com'); 
    _CreateAcc.verifyLoginError();
  });

  it('Valid email and no password', () => {
    _CreateAcc.visitLoginPage(email);
    _CreateAcc.verifyLoginError(); 
  });

});
