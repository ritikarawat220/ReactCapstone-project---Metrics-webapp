import { AiFillAudio } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const Header = () => (
  <header>
    <Link className="link" to="/">
      {' '}
      <IoIosArrowBack size={30} />
    </Link>
    <h1 className="header-tag">World Metrics</h1>
    <div className="header-bar">
      <AiFillAudio size={25} />
      <FiSettings size={25} />
    </div>
  </header>
);

export default Header;
