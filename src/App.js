import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
function App() {
  const [mode,setMode] = useState("light");
  const [swt,setSwt] = useState('Enable dark mode');

  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
    setMode("dark");
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "white"
    setSwt('Enable Light mode')
    }
    else {
     setMode("light");
     document.body.style.backgroundColor = "white";
     document.body.style.color = "black"
     setSwt('Enable Dark mode')
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils#1" about="About Textutils" mode = {mode} modeswt = {swt} toggleMode = {toggleMode}/>
      {/* <About/> */}
      <div className="container my-3">
        <TextFrom heading="Enter text to analyse below" mode = {mode}/>
        
      </div>

    </>
  );
}

export default App;
