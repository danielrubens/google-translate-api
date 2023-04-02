import React from 'react';
import { screen } from '@testing-library/react';
import SelectDropDown from '../components/SelectDropDown';
import RenderStore from './utils';


describe('SelectDropDown component', () => {
  it('renders input and down arrow', () => {
    RenderStore(<SelectDropDown/>)
    const component = screen.getByTestId('select-drop-down');
    const input = screen.getByRole('textbox');
    const arrow = screen.getByTestId('svg-drop-down');
    expect(component).toContainElement(input);
    expect(component).toContainElement(arrow);
  });
});
