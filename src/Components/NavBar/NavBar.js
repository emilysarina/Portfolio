//import React, {useState, useContext, useEffect, useRef} from 'react'
import css from './NavBar.module.css';


// export const navLinks = [
// 	{ navLinkId: 'Home', scrollToId: 'homePage' },
// 	{ navLinkId: 'About', scrollToId: 'aboutPage' },
// 	{ navLinkId: 'Contact', scrollToId: 'contactPage' },
// ];

// export const NavContext = React.createContext();

// const NavProvider = ({ children }) => {
// 	const [activeNavLinkId, setActiveNavLinkId] = useState('');

// 	const providerValue = {
// 		activeNavLinkId,
// 		setActiveNavLinkId,
// 	};

// 	return (
// 		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
// 	);
// };

// export const NavProvider;

// export const useNav = navLinkId => {
// 	const ref = useRef(null);

// 	const { setActiveNavLinkId } = useContext(NavContext);

// 	const isOnScreen = useOnScreen(ref);

// 	useEffect(() => {
// 		if (isOnScreen) {
// 			setActiveNavLinkId(navLinkId);
// 		}
// 	}, [isOnScreen, setActiveNavLinkId, navLinkId]);

// 	return ref;
// };

// const NavLink = ({ navLinkId, scrollToId, activeNavLinkId, setActiveNavLinkId }) => {
// 	const handleClick = () => {
// 		setActiveNavLinkId(navLinkId);
// 		document.getElementById(scrollToId).scrollIntoView({
// 			behavior: 'smooth', // gives an ease-in-out effect to our scroll
// 		});
// 	};
	
// 	return (
// 		<span 
// 		 	id={navLinkId} 
// 			className={activeNavLinkId === navLinkId ? 'activeClass' : ''} 
// 		 	onClick={handleClick}
// 		>
// 			{navLinkId}
// 		</span>
// 	);
// };

// const Nav = () => {
// 	const [activeNavLinkId, setActiveNavLinkId] = useState('');

// 	return (
// 	    <nav>
// 	      {navLinks.map(
// 		({navLinkId, scrollToId}) =>
// 		  <NavLink 
// 			navLinkId={navLinkId} 
// 			scrollToId={scrollToId} 
// 			activeNavLinkId={activeNavLinkId}
// 			setActiveNavLinkId={setActiveNavLinkId} 
// 		  />
// 	      )}
// 	    </nav>
// 	  )
// };

export default function NavBar() {
  return <div className={css.NavBar}>
    
      <img src='/ese.png' alt='logo' className={css.logo}/>
      <div className={css.pageButtons}>
      <p className={css.NavButton}>
      About.</p>
      <p className={css.NavButton}>
      Projects.</p>
      <p className={css.NavButton}>
      Contact.</p>
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