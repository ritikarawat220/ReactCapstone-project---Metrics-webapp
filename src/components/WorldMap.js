import { useSelector } from 'react-redux';
import asia from '../assets/asie.png';
import africa from '../assets/afrique.png';
import europe from '../assets/leurope.png';
import northAmerica from '../assets/amerique-du-nord.png';
import southAmerica from '../assets/amerique-du-sud.png';
import oceania from '../assets/australie.png';
import antarctica from '../assets/antarctica.png';

const WorldMap = () => {
  const state = useSelector((state) => state.countries.map);
  let continent;
  switch (state) {
    case 'Asia':
      continent = <img src={asia} alt="Asian continent" />;
      break;
    case 'Africa':
      continent = <img src={africa} alt="African continent" />;
      break;
    case 'Europe':
      continent = <img src={europe} alt="European continent" />;
      break;
    case 'North America':
      continent = <img src={northAmerica} alt="North american continent" />;
      break;
    case 'South America':
      continent = <img src={southAmerica} alt="South american continent" />;
      break;
    case 'Antarctica':
      continent = <img src={antarctica} alt="Antarctican continent" />;
      break;
    case 'Oceania':
      continent = <img src={oceania} alt="Oceania continent" />;
      break;
    default:
      continent = (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Rotating_earth_%28large%29_transparent.gif"
          alt="flat texture blue green World transparent background @transparentpng.com"
          className="world-image"
        />
      );
      break;
  }

  return <div className="map" data-testid="map-div">{continent}</div>;
};

export default WorldMap;
