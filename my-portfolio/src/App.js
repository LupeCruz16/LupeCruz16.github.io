import './globalCSS/common.css';
import './globalCSS/constants.css';
import { useState } from 'react';

import Navigation from './components/navigation/Navigation.js';

import S3 from './pages/s3/S3.js';
import Home from './pages/home/Home.js';
import AboutMe from './pages/aboutMe/AboutMe.js';
import SigParser from './pages/sigparser/SigParser.js';
import InProgress from './pages/inProgress/inProgress.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Modal from './components/Modal.js';
import Contact from './pages/contact/Contact.js';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <main className="App-main">
        <Router>
          <Navigation toggleModal={toggleModal} />
          <Routes className="content-grid">
            <Route path="/" element={<Home toggleModal={toggleModal} />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/sigparser" element={<SigParser />} />
            <Route path="/s3" element={<S3 />} />
            <Route path="/in-progress" element={<InProgress />} />
          </Routes>
        </Router>
        <Modal show={showModal} onClose={toggleModal}>
          <Contact />
        </Modal>
      </main>
    </div>
  );
}

export default App;
