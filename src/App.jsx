import './App.css'
import About from "./components/About";
import DevOps from "./components/DevOps";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import CaseStudyCard from './components/CaseStudyCard';
import Platform from "./components/Platform";

function App() {
  return (
    <>
    <Hero />
    <CaseStudyCard />
    <Experience />
    <Platform />
    <DevOps />
    <About />
    </>
  )
}

export default App
