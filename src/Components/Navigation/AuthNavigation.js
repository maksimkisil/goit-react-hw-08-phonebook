import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className={s.link}>
        Sign up
      </NavLink>
      <NavLink to="/login" className={s.link}>
        Log in
      </NavLink>
    </div>
  );
}