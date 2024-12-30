import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    

<Navbar title="Harsh" aboutText="Aditi"/>

<div className="container my-3">
<TextForm heading="Enter your feedback below"/>
</div>
<div className="container my-4">
<About subHeading1="# Read me 1" subHeading2="# Read me 2" subHeading3="# Read me 3"/>
</div>
    </>
  );
}

export default App;
