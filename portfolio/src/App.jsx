import { useState } from "react";
import "./App.css";
import { StartAnimation } from "./components/StartAnimation";
import './index.css';
import {Navbar} from "./components/Navbar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  
  return ( 
    <>
      {!isLoaded && <StartAnimation onComplete={() => setIsLoaded(true)} />} {" "}
      <div className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      </div>
    </>
    );   
}
export default App;
