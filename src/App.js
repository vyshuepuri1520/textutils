import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
function App() {
  return (
    <>
      <Navbar title="TextUtils#1" about="About Textutils" />
      <About/>
      <div className="container my-3">
        <TextFrom heading="Enter text to analyse below" />
        
      </div>

    </>
  );
}

export default App;
