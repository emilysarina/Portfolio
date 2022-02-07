import './App.css';
import NavBar from './Components/NavBar/NavBar';
import About from './Pages/AboutPage/About';
import HomePage from './Pages/HomePage/Home';
import { Routes, Route } from "react-router-dom"
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <header>
       <NavBar/>
      </header>
      <Routes>
      <Route path="/" element={ <HomePage/> } />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </div>
  );
}

export default App;
