import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CountriesDetail = () => {
  const state = useSelector((state) => state.countries.countries);
  const { countryName } = useParams();
  const output = state.filter((item) => item.name.common === countryName);

  if (output.length !== 0) {
    const {
      name,
      flags,
      capital,
      languages,
      currencies,
      id,
      area,
      population,

    } = output[0];

    return (
      <div className="dashboard">
        <div className="info">
          <img className="info-flag" src={flags.png} alt={`${name.common}'s Flag`} />
          <h1>{name.official}</h1>
        </div>
        <div className="item">
          Capital:
          <span className="bold">{capital || 'N/A'}</span>
        </div>
        <div className="item">
          <span>ID</span>
          <span>{id}</span>
        </div>
        <div className="item">

          Area:
          <span className="bold">{`${area} km²` || 'N/A'}</span>
        </div>
        <div className="item">
          Population:
          <span className="bold">{population || 'N/A'}</span>
        </div>
        <div className="item">
          <span>ID</span>
          <span>{id}</span>
        </div>
        <div className="item">
          Languages:
          <span className="bold">{languages ? Object.values(languages)[0] : 'N/A'}</span>
        </div>
        <div className="item">
          Currencies:
          {currencies ? (
            <ul>
              {Object.entries(currencies).map(([key, value]) => (
                <li className="bold" key={key}>
                  {`${key}: ${value.name}`}
                  <span className="symbol">{value.symbol}</span>
                </li>
              ))}
            </ul>
          ) : (
            'N/A'
          )}
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};
export default CountriesDetail;
