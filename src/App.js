import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    

<Navbar title="Harsh" aboutText="Home"/>
<div className="container my-3">
  
<TextForm heading="Enter your feedback below.."/>
</div>
    </>
  );
}

export default App;
