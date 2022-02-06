import React from 'react';
import css from './NavBar.module.css';

export default function NavBar() {
  return <div className={css.NavBar}>
      <p className={css.NavButton}>
      About.</p>
      <p className={css.NavButton}>
      Projects.</p>
      <p className={css.NavButton}>
      Experience.</p>
      <p className={css.NavButton}>
      Contact.</p>
  </div>;
}
