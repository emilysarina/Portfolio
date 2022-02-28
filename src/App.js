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
      <HomePage/>
      <AboutPage/>
      <Projects/>
      <ContactPage/>
    </div>
  );
}

export default App;
