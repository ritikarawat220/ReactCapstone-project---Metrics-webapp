import { AiFillAudio } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

const Header = () => (
  <header>
    <h1 className="header-tag">World Metrics</h1>
    <div className="header-bar">
      <AiFillAudio size={25} />
      <FiSettings size={25} />
    </div>
  </header>
);

export default Header;
