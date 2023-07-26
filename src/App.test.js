import * as React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import axios from './__tests__/__mocks__/axios'
import store from './redux/store';
import App from './App';

describe('Testing Navigation', () => {
  test('Navigate to missions page', () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    act(() => {
      userEvent.click(screen.getByText('missions'));
    })

    expect(screen.getByText(/Status/)).toBeInTheDocument();
  });

  test('Navigate to profile page', () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    
    act(() => {
      userEvent.click(screen.getByText('profile'));
    })

    expect(screen.getByText(/My missions/)).toBeInTheDocument();
  });
});
