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

    // const clearText=()=>{
    //     let nextText=text.clear(setText)-----------------------------------------------------------------------
    //     setText(nextText);
    // }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
    <div>
        <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="9"></textarea>
   </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleDnClick}>Convert to lowerCase</button>
  {/* <button className="btn btn-primary" onClick={clearText}>Clear</button> */}
   </div>
   </div>
   <div className="container my-2">
    <h2>Your text summary----------------</h2>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length-1} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
   </>
  )
}
