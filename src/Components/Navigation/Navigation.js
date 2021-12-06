import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={s.link} activeclassname={s.activeLink}>
        Home
      </NavLink>
    {isLoggedIn && (
      <NavLink to="/contacts" className={s.link} activeclassname={s.activeLink}>
        Phonebook
      </NavLink>
    )}
    </nav>
  );
};

export default Navigation;