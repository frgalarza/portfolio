import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"/>
      <main className='main'>
        <Banner className="banner"/>
        <About />
      </main> 
    </div>
  );
}

export default App;
