import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/features" element={<Features/>}/>
    </Routes>

    </>
  );
}

export default App;
