import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
  render, screen,
} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import Missions from '../routes/Missions';

const mockStore = configureMockStore();

describe('test missions ', () => {
  it('Render missions', () => {
    const mockData = {
      selectedmissions: [{
        mission_name: 'Mars',
        mission_id: '1',
        description: 'Good Luck',
        reserved: false,
      },
      {
        mission_name: 'Mars2',
        mission_id: '2',
        description: 'Good Luck2',
        reserved: false,
      }],
      isLoading: true,
    };

    const store = mockStore({
      missions: mockData,
    });
    render(
      <>
        <BrowserRouter>
          <Provider store={store}>
            <Missions />
          </Provider>
        </BrowserRouter>
        ,
      </>,
    );

    const elementsWithClass = screen.getAllByTestId('missions');
    expect(elementsWithClass).toHaveLength(2);
  });
});
