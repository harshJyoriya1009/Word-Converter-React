import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="black"  
      showAlert("Dark mode is Enabled", "Successfully")
      document.title="Word Converter App-Dark mode"
    }else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode is Enabled", "Successfully")
      document.title="Word Converter App-Light mode"
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
    <Router>
<Navbar title="Word converter" aboutText="About" mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>

<div className="container my-3">
<Routes>

        <Route path="/about"
           element={<About subHeading1="# Read me 1" subHeading2="# Read me 2" subHeading3="# Read me 3" />}
        />

        <Route  path="/"
            element={  <TextForm  showAlert={showAlert} heading="Enter your feedback below" mode={mode} toggleMode={toggleMode}/>}
        />
          
 </Routes>
</div>
</Router>

    </>
  );
}

export default App;
