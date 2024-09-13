import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header>
        <h1>Header</h1>
        <nav>
          <ul>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/main" >Main</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
            <NavLink to="/about" >About</NavLink>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
