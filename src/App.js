// import logo from './logo.svg';
import About from './About';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
   <>
   <Router>
   
   <Routes>
          <Route path="/" element={<About />} />
            
         
  </Routes>

   </Router>
   </>
  );
}

export default App;
