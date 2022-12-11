import './App.css';
import Navbar from './componats/navbar/Navbar.js';
import Banner from './componats/banner/Banner.js';
import Work from './componats/work/Work.js';
import Project from './componats/project/Project'
import Features from './componats/features/Features.js';
import About from './componats/About/About';

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Work/>
    <Project/>
    <Features/>
    <About/>
    </>
  );
}

export default App;
