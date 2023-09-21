import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alerts from "./components/Alerts";
function App() {
  const [mode,setMode] = useState("light");
  const [swt,setSwt] = useState('Enable dark mode');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
   setAlert({
    msg:message,
    type:type
  }) 
  setTimeout(() => {
    setAlert(null)
  }, 1000);
  }

  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
    setMode("dark");
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "white"
    setSwt('Enable Light mode')
    showAlert('Dark Mode is Enabled','success')
    }
    else {
     setMode("light");
     document.body.style.backgroundColor = "white";
     document.body.style.color = "black"
     setSwt('Enable Dark mode')
     showAlert('Light Mode is Enabled','success')
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils#1" about="About Textutils" mode = {mode} modeswt = {swt} toggleMode = {toggleMode}/>
      <Alerts alert = {alert}/>
      {/* <About/> */}
      <div className="container my-3">
        <TextFrom showalert = {showAlert} heading="Enter text to analyse below" mode = {mode}/>  
      </div>

    </>
  );
}

export default App;
