import "./NavBar";
import Logo from "../../assets/logo.png";
import Menu from "../../assets/menu.png";
import "./navBar.css";
import { useState } from "react";
import { Link } from "react-scroll";
export const NavBar = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navBar">
      <img className="logo" src={Logo} alt="Logo McFit" />
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "0.5rem",
            width: "3rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img className="menu-mobile" src={Menu} alt="" />
        </div>
      ) : (
        <ul className="navBar-menu">
          <li onClick={() => setMenuOpen(false)}>Gimnasios</li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              Contrato
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>Entrenamiento de prueba</li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Entrenamiento
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>App</li>
          <li onClick={() => setMenuOpen(false)}>McFit Plus</li>
          <li onClick={() => setMenuOpen(false)}>Pago de Deuda</li>
        </ul>
      )}
    </div>
  );
};
