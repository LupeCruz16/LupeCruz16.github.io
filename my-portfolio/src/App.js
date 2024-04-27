import './globalCSS/App.css';
import './globalCSS/common.css';
import './globalCSS/constants.css';
import Home from './pages/home/js/Home.js';
import AboutMe from './pages/aboutMe/js/AboutMe.js';
import SigParser from './pages/sigparser/js/SigParser.js';
import S3 from './pages/s3/js/S3.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <main className = "App-main">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/sigparser" element={<SigParser />} />
            <Route path="/s3" element={<S3 />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
