import React from 'react';
import { screen, render } from '@testing-library/react';
import Arrows from '../components/Arrows';
import App from '../App';

describe('Arrows component', () => {
  it('renders the SVG arrows', () => {
    render(<Arrows />);
    const svgElement = screen.getByTestId('arrows');
    const pathElement = screen.getByTestId('arrows-path');
    const pathAttrs = ['d', 'M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z']
    expect(svgElement).toBeInTheDocument(); 
    expect(pathElement).toHaveAttribute(...pathAttrs);
  });

  it('ensures Arrows component is called inside the App', () => {
    render(<App />);
    const arrowsComponent = screen.getByTestId('arrows');
    expect(arrowsComponent).toBeInTheDocument();
  });
});
