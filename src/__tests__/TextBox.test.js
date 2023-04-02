/* eslint-disable react/style-prop-object */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextBox from '../components/TextBox';

describe('TextBox Component', () => {
  it('should render "Enter Text" on input placeholder', () => {
    render(<TextBox style='input' />);
    const input = screen.queryByPlaceholderText('Enter Text');
    const output = screen.queryByPlaceholderText('Translation');
    expect(input).toBeInTheDocument();
    expect(output).not.toBeInTheDocument();
  });

  it('should render "Translation" on output placeholder', () => {
    render(<TextBox style='output' />);
    const output = screen.queryByPlaceholderText('Translation');
    const input = screen.queryByPlaceholderText('Enter Text');
    expect(output).toBeInTheDocument();
    expect(input).not.toBeInTheDocument();
  });

  it('should allow user to type on textarea input', () => {
    render(<TextBox style='input' />);
    const input = screen.queryByPlaceholderText('Enter Text');
    userEvent.type(input, 'Hello, World!');
    expect(input).toHaveValue('Hello, World!');
  });
  it('ensures textarea is enabled for input and disabled for output"', () => {
    render(<TextBox style="input" />);
    const input = screen.getByPlaceholderText('Enter Text');
    expect(input).toBeEnabled();
  });
  it('ensures textarea is disabled for output"', () => {
    render(<TextBox style="output" />);
    const output = screen.getByPlaceholderText('Translation');
    expect(output).toBeDisabled();
  });
  test('renders SelectDropDown component inside TextBox component', () => {
    render(<TextBox />);
    const SelectDropDown = screen.getByTestId('select-drop-down');
    expect(SelectDropDown).toBeInTheDocument();
  });
});
