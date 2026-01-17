import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./components/About";
import DevOps from "./components/DevOps";
import Experience from "./components/Experience";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Experience />
    <DevOps />
    <About />
    </>
  )
}

export default App
