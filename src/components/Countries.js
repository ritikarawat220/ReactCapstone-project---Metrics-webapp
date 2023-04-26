import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Countries = () => {
  const { countries, map } = useSelector((state) => state.countries);

  let output = [];

  if (map !== 'SELECT A CONTINENT') {
    if (countries.length !== 0) {
      output = countries.filter((item) => item.continents[0] === map);
    }
  } else {
    // Display a default continent if no continent is selected
    output = countries.filter((item) => item.continents[0] === 'Africa');
  }

  return (
    <ul className="countries-list" data-testid="countries-list">
      {output.map((country) => (
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
