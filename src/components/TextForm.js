import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    
    const handleUpClick=()=>{
        let nextText=text.toUpperCase()
        setText(nextText)
        // props.showAlert("Converted to Uppercse", "Successfully")
        document.title="Word Converter- Uppercase"
    }

    const handleDnClick=()=>{
        let nextText=text.toLowerCase()
        setText(nextText);
        document.title="Word Converter- Lowercase"
        
    }

    const clearText=()=>{
        let nextText=" "
        setText(nextText);
        document.title="Word Converter- Clear text"
    }
    
    const copyText =()=>{
        // var text= document.getElementById("myBox")
        // text.select()
        // document.getSelection().removeAllRanges()
        navigator.clipboard.writeText(text)
        document.title="Word Converter- Copy text"
        props.showAlert("Your text is copied","Gentalman")
    }

    const removeExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        document.title="Word Converter- Remove Extra Space"
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
  <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDnClick}>Convert to lowerCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={removeExtraSpaces}>Remove Extra Spaces</button>
   </div>
   </div>

   <div className="container my-2" style={{color: props.mode==="light"?"black":"white" }}>
    <h2>Your text summary----------------</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    <h2>Preview</h2>
    <p >{text.length>0?text:"Enter something"}</p>
    
   </div>

   </>
  )
}
