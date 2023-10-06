import React, { useState } from 'react'

 function TextFrom(props) {
  const removeExtraSpaces = (text) => {
    return text.replace(/\s+/g, ' ').trim();}
    
  const [text,setText] = useState('');

  const handleRemoveExtraSpaces = () => {
    const cleaned = removeExtraSpaces(text);
    setText(cleaned);
    props.showalert("Removed extra spaces", "success");
  };
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
    const handleCopyClick = () => {
      navigator.clipboard.writeText(text) 
      props.showalert('Text copied to clipboard', 'success');
    };

    

    const myStyle=()=>{
      return{
      backgroundColor : props.mode === 'dark'? 'grey':'#0d6efd',
      borderColor:props.mode === 'dark'?'#65686b':'#0a58ca'
    }
    }
    
   
  return (    
    <div>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
              <textarea className="form-control" value = {text} onChange = {handleonChange} style = {{backgroundColor : props.mode === 'dark'? '#121212':'white',color : props.mode === 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length===0}className="btn btn-primary mx-1 my-1" style = {myStyle()} onClick = {handleupClick}>Convert to Upper case</button>
        <button  disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick = {handlednClick} style = {myStyle()}>Convert to Lower case</button>
        <button disabled = {text.length===0}  className="btn btn-primary mx-1 my-1" onClick = {handleclearClick} style = {myStyle()}>Clear Text</button>
        <button disabled = {text.length===0}  className="btn btn-primary mx-1 my-1" onClick = {handleRemoveExtraSpaces} style = {myStyle()}>Remove Xtra Spaces</button>
        <button disabled = {text.length===0}  className="btn btn-primary mx-1 my-1" onClick = {handleCopyClick} style = {myStyle()}>Copy</button>


        <div className="container">
          <h1>Your Text summary: </h1>
          
          <p>Number of Characters:{text.length} , Number of Words: {text.split(/\s+/).filter((element)=>{return element.length!== 0}).length}</p>
          <p>Read time: {0.08 * text.split(/\s+/).filter((element)=>{return element.length!== 0}).length}</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Nothing to preview.....!!!"}</p>

        </div>
      
      
      
    </div>

    
  )
}

export default TextFrom;
