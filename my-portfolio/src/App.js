import './globalCSS/App.css';
import './globalCSS/common.css';
import './globalCSS/constants.css';
import Home from './pages/home/js/Home.js'
import Chatbot from './pages/chatbot/Chatbot.js'
import RoamReady from './pages/roamReady/RoamReady.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <main className = "App-main">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Chatbot" element={<Chatbot />} />
            <Route path="/RoamReady" element={<RoamReady />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
