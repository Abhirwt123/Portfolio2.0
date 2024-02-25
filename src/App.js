import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { motion, useScroll } from "framer-motion";
import Project from "./components/Project";
import SmallProjects from "./components/SmallProjects";
import Footer from "./components/Footer";
import WelcomePage from "./components/WelcomePage";
import { useEffect, useState } from "react";

function App() {
  const { scrollYProgress } = useScroll();
  const [pageStatus, setPageStatus] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPageStatus(true);
    }, 3000);
  }, []);
  return (
    <>
      <WelcomePage />
      <div className={`${pageStatus ? "block" : "hidden"}`}>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="App bg-[#0A192F] ">
          <Header />
          <Home />
          <About />
          <Project />
          <SmallProjects />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
