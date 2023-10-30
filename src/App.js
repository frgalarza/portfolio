import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import './App.css';
import Projects from './Components/Projects/Projects';
import projectsData from "./projects.json"
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"/>
      <main className='main'>
        <Banner className="banner"/>
        <About />
        <Projects projects={projectsData}/>
        <Skills />
        <Contact />
        <Footer />
      </main> 
    </div>
  );
}

export default App;
