import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    
    const handleUpClick=()=>{
        let nextText=text.toUpperCase()
        setText(nextText)
    }

    const handleDnClick=()=>{
        let nextText=text.toLowerCase()
        setText(nextText);
    }

    const clearText=()=>{
        let nextText=" "
        setText(nextText);
    }

    const copyText =()=>{
        var text= document.getElementById("myBox")
        text.select()
        text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
    }

    const removeExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
    }

   
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==="light"?"black":"white" }}>
        <h1>{props.heading}</h1>
    <div>
        <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} 
     style={
        {
            backgroundColor: props.mode==="light"?"white":"gray",              //onject inside js
             color:  props.mode==="light"?"black":"white"
              }
              } id="myBox" rows="9"></textarea>
   </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleDnClick}>Convert to lowerCase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
  <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
  <button className="btn btn-primary mx-1 my-1 " onClick={removeExtraSpaces}>Remove Extra Spaces</button>
   </div>
   </div>

   <div className="container my-2" style={{color: props.mode==="light"?"black":"white" }}>
    <h2>Your text summary----------------</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p >{text.length>0?text:"Enter something"}</p>
    
   </div>

   </>
  )
}
