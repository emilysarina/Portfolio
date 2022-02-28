import css from './NavBar.module.css';


export default function NavBar() {
  return <div className={css.NavBar}>
    
      <img src='/ese.png' alt='logo' className={css.logo}/>
      <div className={css.pageButtons}>
      <ul className={css.NavList}>
      <li>
      <p className={css.NavButton}>
      About.</p>
      </li>
      <li>
      <p className={css.NavButton}>
      Projects.</p>
      </li>
      <li>
      <p className={css.NavButton}>
      Contact.</p>
      </li>
      </ul>
      </div>
  </div>;
}
