import React from 'react';
import css from './NavBar.module.css';
import { Link } from "react-router-dom";

export default function NavBar() {
  return <div className={css.NavBar}>
      <Link to="/">
      <img src='/ese.png' alt='logo' className={css.logo}/>
      </Link> 
      <div className={css.pageButtons}>
      <Link to="about">
      <p className={css.NavButton}>
      About.</p></Link>
      <Link to="Projects">
      <p className={css.NavButton}>
      Projects.</p>
      </Link>
      <Link to="Contact">
      <p className={css.NavButton}>
      Contact.</p>
      </Link>
      </div>
  </div>;
}


/*
     <img src='https://i.ibb.co/Hp9wdZM/E-6.png' alt='logo' className={css.logo}/>
.logo {
    display: flex;
    justify-content: left;
    height: 2em;
    width: 2em;
}
*/