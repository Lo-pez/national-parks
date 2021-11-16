import React from "react"   
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import FetchHandler from './components/FetchHandler'


function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Home />
          <Routes>
            <Route exact path ="/" element={<FetchHandler/>}></Route>
            <Route exact path ="/activities" element={<FetchHandler />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

            // <Route exact path ="/activities" element={<ActivitiesFetch/>}></Route>
            // <Route exact path ="/parks" element={<ParksFetch/>}></Route>

