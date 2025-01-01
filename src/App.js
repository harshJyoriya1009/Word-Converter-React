import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react'


function App() {

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="black"   //#212529
      showAlert("Dark mode is Enabled", "Successfully")
    }else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode is Enabled", "Successfully")
    }
  }

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
       setAlert({
        msg: message,
        type: type
       })

       setTimeout(() => {
        setAlert(null)
       }, 2000);


  }
  return (
    <>
    
<Navbar title="Harsh" aboutText="Aditi" mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>

<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter your feedback below"  mode={mode} toggleMode={toggleMode} />
</div>

<div className="container my-4">
<About subHeading1="# Read me 1" subHeading2="# Read me 2" subHeading3="# Read me 3"/>
</div>


    </>
  );
}

export default App;
