import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react';

const mockStore = configureMockStore()
const store = mockStore({user: {input: 'English', output: 'Portuguese'}})

const RenderStore = (component) => {
  render(
  <Provider store={store}>
    ${component}
  </Provider>
);
};

export default RenderStore;
