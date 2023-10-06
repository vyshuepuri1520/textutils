import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alerts from "./components/Alerts";
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [swt,setSwt] = useState(' Dark mode');
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
  // setInterval(() => {
  //   document.title =  "TextUtils - is amazing"
  // }, 1000);
  // setInterval(() => {
  //   document.title =  "TextUtils -installation"
  // }, 1500)

  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
    setMode("dark");
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "white"
    setSwt(' Light mode')
    showAlert('Dark Mode is Enabled','success')
    // document.title =  "TextUtils - Dark mode";
   ;
    }
    else {
     setMode("light");
     document.body.style.backgroundColor = "white";
     document.body.style.color = "black"
     setSwt('Dark mode')
     showAlert('Light Mode is Enabled','success')
    //  document.title =                         "TextUtils - Lightmode";
    }
  }
  
  return (
    <>
    <Router>
      <Navbar title="TextUtils#1" about="About" mode = {mode} modeswt = {swt} toggleMode = {toggleMode}/>
      <Alerts alert = {alert}/>
      {/* <About/> */}
      <div className="container my-3">
      <Routes>
      <Route exact path="/about" element={<About mode = {mode}/>} />
      <Route exact path="/" element={<TextFrom showalert={showAlert} heading="Try TextUtils - word Counter, Character Counter, Remove extra spaces" mode={mode} />}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
