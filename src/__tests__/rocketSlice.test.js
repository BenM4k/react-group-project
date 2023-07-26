import rocketReducer, { reserveRocket, cancelReservation } from '../redux/slices/rocketSlice/rocketSlice';

describe('Rockets test', () => {
  test('Type of reserve a rocket', () => {
    const action = reserveRocket();
    const ecpectedAction = {
      type: 'rocket/reserveRocket',
    };

    expect(action).toEqual(ecpectedAction);
  });

  test('Type of cancel a rocket', () => {
    const action = cancelReservation();
    const ecpectedAction = {
      type: 'rocket/cancelReservation',
    };

    expect(action).toEqual(ecpectedAction);
  });

  test('Reserve a rocket', () => {
    const state = {
      rockets: [{
        id: '1',
        name: 'John',
        desc: 'John',
        image: 'http://',
        reserved: false,
      }],
    };

    const action = reserveRocket('1');

    const result = rocketReducer(state, action);

    const newState = {
      rockets: [{
        id: '1',
        name: 'John',
        desc: 'John',
        image: 'http://',
        reserved: true,
      }],
    };
    expect(result).toEqual(newState);
  });

  test('Cancel a rocket', () => {
    const state = {
      rockets: [{
        id: '1',
        name: 'John',
        desc: 'John',
        image: 'http://',
        reserved: true,
      }],
    };

    const action = cancelReservation('1');

    const result = rocketReducer(state, action);

    const newState = {
      rockets: [{
        id: '1',
        name: 'John',
        desc: 'John',
        image: 'http://',
        reserved: false,
      }],
    };
    expect(result).toEqual(newState);
  });
});
