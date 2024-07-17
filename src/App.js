import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Landing from './components/Landing';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

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
