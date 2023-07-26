import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import Rockets from '../routes/Rockets';

const mockStore = configureMockStore();

describe('Test Rockets rendering', () => {
  test('Render a rocket', () => {
    const mockData = [
      {
        id: '1',
        name: 'Rocket',
        desc: 'Rocket Description',
        image: 'http://',
        reserved: false,
      },
    ];

    const store = mockStore({
      rocket: {
        rockets: mockData,
        loadRockets: false,
        loadRocketsTimeout: false,
      },
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Rocket')).toBeInTheDocument();
  });
});
