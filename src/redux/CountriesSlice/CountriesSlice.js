const COUNTRIES = 'countries/countries/COUNTRIES';
const MAP = 'countries/countries/MAP';
const FILTER = 'countries/countries/FILTER';
const BASE_API_LINK = 'https://restcountries.com/v3.1/all';

const initialState = {
  countries: [],
  map: 'SELECT A CONTINENT',
};

const compare = (a, b) => {
  if (a.name.common < b.name.common) {
    return -1;
  }
  if (a.name.common > b.name.common) {
    return 1;
  }
  return 0;
};

export default function countriesSlice(state = initialState, action) {
  switch (action.type) {
    case COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case MAP:
      return {
        ...state,
        map: action.payload,
      };
    default:
      return state;
  }
}

const setCountriesAction = (countries) => ({
  type: COUNTRIES,
  payload: countries,
});

const setMapAction = (continent) => ({
  type: MAP,
  payload: continent,
});

const setFilterAction = (continent) => ({
  type: FILTER,
  payload: continent,
});

const fetchCountryData = () => async (dispatch) => {
  await fetch(BASE_API_LINK)
    .then((result) => result.json())
    .then((response) => {
      const countries = response.map((item) => ({
        name: {
          common: item.name.common,
          official: item.name.official,
        },
        flags: item.flags,
        capital: item.capital,
        languages: item.languages,
        currencies: item.currencies,
        id: item.borders,
        area: item.area,
        population: item.population,
        continents: item.continents,

      }));
      countries.sort(compare);
      dispatch(setCountriesAction(countries));
    });
};

export { fetchCountryData, setMapAction, setFilterAction };
