import Header from './components/Header';
import Profile from './components/Profile';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Profile />

      <div style={{ backgroundColor: "#000", color: "#fff", padding: "3rem" }}>Website is still under the maintenance. The further sections will be updated soon.</div>
    </div>
  );
}

export default App;
