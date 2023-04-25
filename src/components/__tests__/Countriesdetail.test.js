import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/CountriesSlice/store';
import CountriesDetail from '../Countriesdetail';

describe('Testing the CountriesDetail component', () => {
  it('The CountriesDetail component should match the snapshot: ', () => {
    const picker = render(
      <Provider store={store}>
        <CountriesDetail />
      </Provider>,
    );
    expect(picker).toMatchSnapshot();
  });
});