import { useState } from "react";
import "./App.css";
import { StartAnimation } from "./components/StartAnimation";
import './index.css';
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return ( 
    <>
      {!isLoaded && <StartAnimation onComplete={() => setIsLoaded(true)} />}
    </>
    );   
}
export default App;
