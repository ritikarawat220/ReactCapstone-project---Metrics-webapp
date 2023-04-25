import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/CountriesSlice/store';
import Home from '../Home';

describe('Testing the HomePage', () => {
  it('The Home component should match the snapshot: ', () => {
    const picker = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(picker).toMatchSnapshot();
  });
});
