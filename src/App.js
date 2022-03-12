import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/Home';
import ContactPage from './Pages/ContactPage/ContactPage';
import Projects from './Pages/ProjectsPage/Projects';

function App() {
  return (
    <div className="App">
      <header>
       <NavBar/>
      </header>
      <section id='home'>
      <HomePage/>
      </section>
      <section id='about'>
      <AboutPage/>
      </section>
      <section id='projects'>
      <Projects/>
      </section>
      <section id='contact'>
      <ContactPage/>
      </section>
    </div>
  );
}

export default App;
