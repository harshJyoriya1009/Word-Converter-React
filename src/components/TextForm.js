import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Button is clicked" + text)
        let nextText= text.toUpperCase()
        setText(nextText)
    }
    
    const handleOnechange=(event)=>{
        // console.log("Onchange function")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    // setText("New one")
  return (
    
<div>
  <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnechange} id="myBox" rows="9"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
  </div>
  )
}
