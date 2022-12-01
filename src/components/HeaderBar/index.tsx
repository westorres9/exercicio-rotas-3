import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

export default function HeaderBar() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>MeuSite</h1>
        </Link>
        <div>
          <NavLink className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"} to="/home">
            <span>Início</span>
          </NavLink>
          <NavLink className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"}  to="promotion">
            <span>Promoção</span>
          </NavLink>
          <NavLink className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item"}  to="/inscription">
            <span>Inscrição</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
