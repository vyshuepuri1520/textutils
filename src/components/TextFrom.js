import React, { useState } from 'react'

 function TextFrom(props) {
  

    const handleupClick=()=>{
        setText(text.toUpperCase())
        props.showalert("converted to upper case",'success')
    }
    const handlednClick=()=>{
      setText(text.toLowerCase())
      props.showalert("converted to lower case",'success')
  }
  const handleclearClick=()=>{
    
    setText("")
    props.showalert("Cleared text",'success')
  }
 
    const handleonChange=(event)=>{
        console.log("this is on change");
        setText(event.target.value);
    }
    
    const [text,setText] = useState("Enter text here");
  return (    
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
              <textarea className="form-control" value = {text} onChange = {handleonChange} style = {{backgroundColor : props.mode === 'dark'? '#121212':'white',color : props.mode === 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick = {handleupClick}>Convert to Upper case</button>
        <button className="btn btn-primary mx-3" onClick = {handlednClick}>Convert to Lower case</button>
        <button className="btn btn-primary mx-3" onClick = {handleclearClick}>Clear Text</button>


        <div className="container">
          <h1>Your Text summary: </h1>
          
          <p>Number of Characters:{text.length} , Number of Words: {text.split(" ").length}</p>
          <p>Read time: {0.08 * text.split(" ").length}</p>
          <h3>Preview</h3>
          <p>{text}</p>

        </div>
      
      
      
    </div>

    
  )
}

export default TextFrom;
