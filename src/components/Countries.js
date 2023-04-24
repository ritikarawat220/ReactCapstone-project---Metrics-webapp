import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Countries = () => {
  const { countries, map } = useSelector((state) => state.countries);

  let output = [];

  if (map !== 'SELECT A CONTINENT') {
    if (countries.length !== 0) {
      output = countries.filter((item) => item.continents[0] === map);
    }
  }

  return (
    <ul className="countries-list" data-testid="countries-list">
      {map === 'SELECT A CONTINENT'
        ? <h2>No continent selected</h2>
        : output.map((country) => (
          <li className="countries-item" key={country.name.common}>
            <Link to={`/countries/${country.name.common}`}>
              <img
                className="flag"
                src={country.flags.png}
                alt={`${country.name.common}'s Flag`}
              />
              <span className="bold">{country.name.common}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};
export default Countries;
