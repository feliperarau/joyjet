import logo from '../../assets/img/logo.png';
import 'bootstrap/js/dist/collapse';
import Menu from '../Menu';
import MenuToggler from '../MenuToggler';
import './index.scss';

const Header = () => {
  return (
    <header className="_header">
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container align-items-between">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Space" />
          </a>
          <MenuToggler target="#navbarNav" />
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
