import { ROUTES } from "../../routes";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {


  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__logo" href="">
          Alias
        </a>

        <div className="header__block">
          <a className="header__block-link" href="">
            ПРАВИЛА
          </a>
          <Link className="header__block-link" to={ROUTES.teams}>
            ИГРАТЬ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
