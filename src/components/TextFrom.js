import React, { useState } from 'react'

 function TextFrom(props) {
  

    const handleupClick=()=>{
        setText(text.toUpperCase())
        props.showalert("Converted to upper case",'success')
    }
    const handlednClick=()=>{
      setText(text.toLowerCase())
      props.showalert("Converted to lower case",'success')
  }
  const handleclearClick=()=>{
    
    setText("")
    props.showalert("Cleared text",'success')
  }
 
    const handleonChange=(event)=>{
        console.log("this is on change");
        setText(event.target.value);
    }

    const myStyle=()=>{
      return{
      backgroundColor : props.mode === 'dark'? 'grey':'#0d6efd',
      borderColor:props.mode === 'dark'?'#65686b':'#0a58ca'
    }
    }
    
    const [text,setText] = useState("Enter text here");
  return (    
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
              <textarea className="form-control" value = {text} onChange = {handleonChange} style = {{backgroundColor : props.mode === 'dark'? '#121212':'white',color : props.mode === 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" style = {myStyle()} onClick = {handleupClick}>Convert to Upper case</button>
        <button className="btn btn-primary mx-3" onClick = {handlednClick} style = {myStyle()}>Convert to Lower case</button>
        <button className="btn btn-primary mx-3" onClick = {handleclearClick} style = {myStyle()}>Clear Text</button>


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
