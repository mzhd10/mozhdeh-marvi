import "./App.css";

import { About } from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import BackTop from "./Components/BackTop/BackTop";
import Achievements from "./Components/Achievements/Achievements";
import Projects from "./Components/Projects/Projects";
import Themes from "./Components/Themes/Themes";
import Timeline from "./Components/Timeline/Timeline";

function App() {
  return (
    <>
      <Navbar />
      <Themes />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackTop />
    </>
  );
}

export default App;
