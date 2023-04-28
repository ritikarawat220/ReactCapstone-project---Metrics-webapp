import { useDispatch, useSelector } from 'react-redux';
import { setMapAction } from '../redux/CountriesSlice/CountriesSlice';

const Continent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.countries.map);
  const selectingHandler = (e) => {
    dispatch(setMapAction(e.target.value));
  };

  const continents = [
    'Asia',
    'Europe',
    'Africa',
    'North America',
    'South America',
    'Antarctica',
    'Oceania',
  ];

  return (
    <select name="continents" defaultValue={state} id="continents" data-testid="select" onChange={(e) => selectingHandler(e)}>
      <option disabled value="SELECT A CONTINENT" className="hidden">SELECT A CONTINENT</option>
      {continents.map((item) => (
        <option value={item} key={item}>{item}</option>
      ))}
    </select>
  );
};

export default Continent;
