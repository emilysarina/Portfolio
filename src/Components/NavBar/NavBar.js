import css from './NavBar.module.css';


export default function NavBar() {
  return <div className={css.NavBar}>
      <a 
       href="/"
       onClick={e => {
       let home = document.getElementById("home");
       e.preventDefault();  // Stop Page Reloading
       home && home.scrollIntoView({ behavior: 'smooth' });
       }}>
      <img src={`${process.env.PUBLIC_URL}/ese.png`} alt='logo' className={css.logo}/>
      </a>
      <div className={css.pageButtons}>
      <ul className={css.NavList}>
      <li>
      <a 
      className={css.NavButton}
      href='about'
      onClick={e => {
      let about = document.getElementById("about");
      e.preventDefault();  // Stop Page Reloading
      about && about.scrollIntoView({ behavior: 'smooth' });
      }}>
      About.</a>
      </li>
      <li>
      <a 
      className={css.NavButton}
      href='/'
      onClick={e => {
      let projects = document.getElementById("projects");
      e.preventDefault();  // Stop Page Reloading
      projects && projects.scrollIntoView({ behavior: 'smooth' });
      }}>
      Projects.</a>
      </li>
      <li>
      <a 
      className={css.NavButton}
      href='/'
      onClick={e => {
      let contact = document.getElementById("contact");
      e.preventDefault();  // Stop Page Reloading
      contact && contact.scrollIntoView({ behavior: 'smooth' });
      }}>
      Contact.</a>
      </li>
      </ul>
      </div>
  </div>;
}
