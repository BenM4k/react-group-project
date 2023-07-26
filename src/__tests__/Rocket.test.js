import Rockets from "../routes/Rockets";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import store from "../redux/store";

describe('Test Rockets rendering', () => {
    test('Render a rocket', () => {
        
        render(
            <BrowserRouter>
              <Provider store={store}>
                <Rockets />
              </Provider>
            </BrowserRouter>
        );
    })
})