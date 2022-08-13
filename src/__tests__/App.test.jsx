import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

it('Testing the root component, the application as a whole:', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <App />
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
