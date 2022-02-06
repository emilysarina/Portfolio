import './App.css';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage/Home'

function App() {
  return (
    <div className="App">
      <header>
       <NavBar/>
       <HomePage />
      </header>
    </div>
  );
}

export default App;
