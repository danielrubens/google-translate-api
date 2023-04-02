import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectDropDown from '../components/SelectDropDown';

describe('SelectDropDown component', () => {
  it('renders input and down arrow', () => {
    render(<SelectDropDown />);
    const component = screen.getByTestId('select-drop-down');
    const input = screen.getByRole('textbox');
    const arrow = screen.getByTestId('svg-drop-down');
    expect(component).toContainElement(input);
    expect(component).toContainElement(arrow);
  });
});
