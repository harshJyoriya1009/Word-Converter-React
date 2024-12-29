// import React, {useState} from 'react'

// export default function TextForm(props) {
//     const handleUpClick=()=>{
//         let nextText= text.toUpperCase()
//         setText(nextText)
//     }
    
//     const handleOnechange=(event)=>{
//         setText(event.target.value)
//     }
//     const [text, setText] = useState("");
//   return (
    
// <div>
//   <h1>{props.heading}</h1>
//   <div className="mb-3">
//     <textarea className="form-control" value={text} onChange={handleOnechange} id="myBox" rows="9"></textarea>
//   </div>
//   <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
//   </div>
//   )
// }

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
    const [text, setText] = useState("");
  return (
    <div>
        <h1>{props.heading}</h1>
    <div>
        <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="9"></textarea>
   </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary" onClick={handleDnClick}>Convert to lowerCase</button>
   </div>
   </div>
   
  )
}
