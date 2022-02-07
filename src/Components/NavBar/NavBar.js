import React from 'react';
import css from './NavBar.module.css';
import { Link } from "react-router-dom";

export default function NavBar() {
  return <div className={css.NavBar}>
      <Link to="about">
      <p className={css.NavButton}>
      About.</p></Link>
      <p className={css.NavButton}>
      Projects.</p>
      <p className={css.NavButton}>
      Experience.</p>
      <Link to="Contact">
      <p className={css.NavButton}>
      Contact.</p>
      </Link>
  </div>;
}


/*
     <img src='https://i.ibb.co/R6JZnjM/E.png' alt='logo' className={css.logo}/>
.logo {
    display: flex;
    justify-content: left;
    height: 2em;
    width: 2em;
}
*/