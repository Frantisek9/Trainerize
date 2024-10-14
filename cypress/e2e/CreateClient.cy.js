import _CreateClient from '../support/_CreateClient';

describe('Client Management Test', () => {

    beforeEach(() => {
        _CreateClient.loginDashBoard('frantisekoch.fit@gmail.com', 'Fo111343234');
    });

    it('Should create a new client successfully', () => {
        _CreateClient.CreateNewClient('RomanPronek.fit@gmail.com', 'Roman', 'Och');

    });

    it('Should delete a new client successfully', () => {
        _CreateClient.DeleteNewClient('Roman Och');
    });
    
});
