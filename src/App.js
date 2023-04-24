import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchCountryData } from './redux/CountriesSlice/CountriesSlice';
import Header from './components/Header';
import Home from './components/Home';
import CountriesDetail from './components/Countriesdetail';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:countryName" element={<CountriesDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
