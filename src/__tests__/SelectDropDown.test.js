import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import SelectDropDown from '../components/SelectDropDown';

const mockStore = configureMockStore()

describe('SelectDropDown component', () => {
  it('renders input and down arrow', () => {
    const store = mockStore({user: {input: 'English', output: 'Portuguese'}})
    render(
      <Provider store={store}>
        <SelectDropDown />
      </Provider>
    );
    const component = screen.getByTestId('select-drop-down');
    const input = screen.getByRole('textbox');
    const arrow = screen.getByTestId('svg-drop-down');
    expect(component).toContainElement(input);
    expect(component).toContainElement(arrow);
  });
});
