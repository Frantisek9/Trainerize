import _reservation from '../support/_reservation';

describe('Login and Reservation Test', () => {
  it('should log in and make a reservation', () => {
    _reservation.login();
    _reservation.reservation();
  });
});
