import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import upArrow from "./components/images/arrow-up.png";
import upArrowHover from "./components/images/arrow-up-hover.png";

import Landing from './components/Landing';
import Error from './components/Error';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [src, setSrc] = useState(upArrow);

  return (
    <BrowserRouter>
      <div className="App">

        <img className="scroll_up_img" src={src} alt="Up arrow" onClick={ScrollToTop} onMouseOver={() => setSrc(upArrowHover)} onMouseOut={() => setSrc(upArrow)} />

        <Routes>
          <Route path='/MyPortfolio-Pranav-N-Rao/' element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <div style={{ backgroundColor: "#000", color: "#fff", padding: "3rem" }}>Website is still under the maintenance. The further sections will be updated soon.</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
