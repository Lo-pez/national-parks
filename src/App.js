import React from "react"   
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import ActivitiesFetch from './components/ActivitiesFetch'
import Parks from './components/Parks'


function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path ="/" element={<Home/>}></Route>
            <Route exact path ="/activities" element={<ActivitiesFetch/>}></Route>
            <Route exact path ="/parks" element={<Parks/>}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

