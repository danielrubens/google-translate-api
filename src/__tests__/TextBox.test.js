/* eslint-disable react/style-prop-object */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextBox from '../components/TextBox';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()

describe('TextBox Component', () => {
  it('should render "Enter Text" on input placeholder', () => {
    const store = mockStore({user: {input: 'English', output: 'Portuguese'}})
    render(
      <Provider store={store}>
        <TextBox style='input' />
      </Provider>
    );
    const input = screen.queryByPlaceholderText('Enter Text');
    const output = screen.queryByPlaceholderText('Translation');
    expect(input).toBeInTheDocument();
    expect(output).not.toBeInTheDocument();
  });

  it('should render "Translation" on output placeholder', () => {
    const store = mockStore({user: {input: 'English', output: 'Portuguese'}})
    render(
      <Provider store={store}>
        <TextBox style='output' />
      </Provider>
    );
    const output = screen.queryByPlaceholderText('Translation');
    const input = screen.queryByPlaceholderText('Enter Text');
    expect(output).toBeInTheDocument();
    expect(input).not.toBeInTheDocument();
  });

  it('should allow user to type on textarea input', () => {
    const store = mockStore({user: {input: 'English', output: 'Portuguese'}})
    render(
      <Provider store={store}>
        <TextBox style='input' />
      </Provider>
    );
    const input = screen.queryByPlaceholderText('Enter Text');
    userEvent.type(input, 'Hello, World!');
    expect(input).toHaveValue('Hello, World!');
  });

  it('ensures textarea is enabled for input and disabled for output"', () => {
    const store = mockStore({user: {input: 'English', output: 'Portuguese'}})
    render(
      <Provider store={store}>
        <TextBox style='input' />
      </Provider>
    );
    const input = screen.getByPlaceholderText('Enter Text');
    expect(input).toBeEnabled();
  });

  it('ensures textarea is disabled for output"', () => {
    const store = mockStore({user: {input: 'English', output: 'Portuguese'}})
    render(
      <Provider store={store}>
        <TextBox style='output' />
      </Provider>
    );
    const output = screen.getByPlaceholderText('Translation');
    expect(output).toBeDisabled();
  });

  it('renders SelectDropDown component inside TextBox component', () => {
    const store = mockStore({user: {input: 'English', output: 'Portuguese'}})
    render(
      <Provider store={store}>
        <TextBox />
      </Provider>
    );
    const SelectDropDown = screen.getByTestId('select-drop-down');
    expect(SelectDropDown).toBeInTheDocument();
  });
});
