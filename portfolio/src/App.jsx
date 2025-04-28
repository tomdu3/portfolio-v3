import { useState } from "react";
import "./App.css";
import { StartAnimation } from "./components/StartAnimation";
import './index.css';
import { Navbar } from "./components/Navbar";
import { MobileNav } from "./components/MobileNav";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  
  return ( 
    <>
      {!isLoaded && <StartAnimation onComplete={() => setIsLoaded(true)} />} {" "}
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
          <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
      </div>
    </>
    );   
}
export default App;
