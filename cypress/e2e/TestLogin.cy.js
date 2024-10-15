import _TestLogin from '../support/_TestLogin'; 

describe('Trainerize Login Tests', () => {
  const email = 'frantisekoch.fit@gmail.com'; 

  it('Valid email and password', () => {
    _TestLogin.visitLoginPage(email, 'Fo111343234');
    cy.get('#nav_clients').click()
  });

  it('Valid email and wrong password', () => {
    _TestLogin.visitLoginPage(email, 'frantisekochh@gmail.com'); 
    _TestLogin.verifyLoginError();
  });

  it('Valid email and no password', () => {
    _TestLogin.visitLoginPage(email);
    _TestLogin.verifyLoginError(); 
  });
  
});
