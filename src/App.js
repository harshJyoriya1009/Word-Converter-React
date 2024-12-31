import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'


function App() {

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="black"   //#212529
    }else{
      setMode("light")
      document.body.style.backgroundColor="white"
    }
  }

  const [mode, setMode] = useState('light');
  return (
    <>
    
<Navbar title="Harsh" aboutText="Aditi" mode={mode} toggleMode={toggleMode}/>

<div className="container my-3">
<TextForm heading="Enter your feedback below"  mode={mode} toggleMode={toggleMode} />
</div>

{/* <div className="container my-4">
<About subHeading1="# Read me 1" subHeading2="# Read me 2" subHeading3="# Read me 3"/>
</div> */}
    </>
  );
}

export default App;
