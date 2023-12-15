import About from "./components/About";
import Appriciation from "./components/Appriciation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Appriciation />
      <Footer />
    </>
  );
};
export default App;
