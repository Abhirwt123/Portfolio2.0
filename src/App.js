
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'
import { motion, useScroll } from "framer-motion";
import Project from './components/Project';
import SmallProjects from './components/SmallProjects';

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    <div className="App bg-[#0A192F] ">
      <Header/>
      <Home/>
      <About/>
      {/* <Project/> */}
      <SmallProjects/>
    </div>
    </>
  );
}

export default App;
