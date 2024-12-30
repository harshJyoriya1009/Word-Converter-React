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

    const myStyle={
        color:"black",
        border: "2px solid black"
    }
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
  <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
  <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
  <button className="btn btn-primary mx-1 my-1 " onClick={removeExtraSpaces}>Remove Extra Spaces</button>
   </div>
   </div>
   <div className="container my-2">
    <h2>Your text summary----------------</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>

    <div className="xod my-3"style={myStyle}>
    <h2 className='container' >Preview</h2>
    <p className='container'>{text}</p>
    </div>

   </div>

   </>
  )
}
