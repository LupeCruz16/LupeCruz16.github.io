import './globalCSS/App.css';
import './globalCSS/common.css';
import S3 from './pages/s3/S3.js';
import './globalCSS/constants.css';
import Home from './pages/home/Home.js';
import AboutMe from './pages/aboutMe/AboutMe.js';
import SigParser from './pages/sigparser/SigParser.js';
import InProgress from './pages/inProgress/inProgress.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <main className = "App-main">
      <Router>
          <Routes className="content-grid">
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/sigparser" element={<SigParser />} />
            <Route path="/s3" element={<S3 />} />
            <Route path="/in-progress" element={<InProgress />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
