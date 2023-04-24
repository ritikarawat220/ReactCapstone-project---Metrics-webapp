import { AiFillAudio, AiFillHome } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link className="link" to="/">
      {' '}
      <AiFillHome size={25} />
    </Link>
    <h1 className="header-tag">World Metrics</h1>
    <div className="header-bar">
      <AiFillAudio size={25} />
      <FiSettings size={25} />
    </div>
  </header>
);

export default Header;
