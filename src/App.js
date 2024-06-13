import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Slider from './Components/Slider';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Contact from './Components/contact';
import { BrowserRouter as Router, Routes, Route, Form} from 'react-router-dom';
function App() {
  return (
    <>
      
<Navbar/>
   <Home>
   </Home>
   <About></About>
   <Portfolio/>
  
  <Experience></Experience>
  <Contact/> 

   </>
  );
}

export default App;
