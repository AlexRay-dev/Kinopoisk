import LoginBtn from "./loginBtn";
import AuthorizationModal from "./authorizationModal";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

  const setActive = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "",
    fontWeight: isActive ? "500" : "400",
  });

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <NavLink to="/" className="header__link" style={setActive}>
              Home
            </NavLink>
            <NavLink to="/search" className="header__link" style={setActive}>
              Search
            </NavLink>
          </div>
          <LoginBtn setAuthorization={setIsAuthPopupOpen} />
        </div>
      </div>

      <AuthorizationModal
        authorization={isAuthPopupOpen}
        setAuthorization={setIsAuthPopupOpen}
      />
    </header>
  );
};

export default Header;
