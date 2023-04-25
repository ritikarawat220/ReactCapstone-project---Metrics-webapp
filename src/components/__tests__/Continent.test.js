import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/CountriesSlice/store';
import Continent from '../Continent';

describe('Testing the Continent', () => {
  it('The Continent component should match the snapshot: ', () => {
    const picker = render(
      <Provider store={store}>
        <Continent />
      </Provider>,
    );
    expect(picker).toMatchSnapshot();
  });
});