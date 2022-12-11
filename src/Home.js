import Navbar from './componats/navbar/Navbar';
import Banner from './componats/banner/Banner';
import Work from './componats/work/Work';
import Project from './componats/project/Project'
import Features from './componats/features/Features';
import About from './componats/About/About';
import Question from './componats/question/Question';
import Building from './componats/building/Building';
import Blog from './componats/blog/Blog';
import Footer from './componats/footer/Footer';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Work/>
    <Project/>
    <Features/>
    <About/>
    <Question/>
    <Building/>
    <Blog/>
    <Footer/>

    </>
  )
}

export default Home
