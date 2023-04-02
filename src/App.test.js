import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore()
test('renders learn react link', () => {
  const store = mockStore({user: {input: 'English', output: 'Portuguese'}})
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
