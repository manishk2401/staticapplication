import React from 'react';
import './App.css';
import Firstpage from './Components/Firstpage';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Seventhpage from './Components/Seventhpage';
import Secondpage from './Components/Secondpage';
import Thirdpage from './Components/Thirdpage';
import Forthpage from './Components/Forthpage';
import Fifthpage from './Components/Fifthpage';
import Sixthpage from './Components/Sixthpage';



function App() {
  return (
    <>
      <Router>

        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/home" element={<Firstpage />} />
          <Route path="/about" element={<Secondpage />} />
          <Route path="/offer" element={<Thirdpage />} />
          <Route path="/thinking" element={<Forthpage />} />
          <Route path="/whatwedo" element={<Fifthpage />} />
          <Route path="/portfolio" element={<Sixthpage />} />
          <Route path="/contact" element={<Seventhpage />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
