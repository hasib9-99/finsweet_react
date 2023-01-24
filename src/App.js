import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Blogs from './pages/Blogs';
import ContactPage from './pages/ContactPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/blog" element={<Blogs/>}/>
      <Route path="/contactPage" element={<ContactPage/>}/>
    </Routes>

    </>
  );
}

export default App;
