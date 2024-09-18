import './globalCSS/common.css';
import './globalCSS/constants.css';
import { useState } from 'react';

import Navigation from './components/navigation/Navigation.js';

import S3 from './pages/s3/S3.js';
import Home from './pages/home/Home.js';
import SigParser from './pages/sigparser/SigParser.js';
import InProgress from './pages/inProgress/inProgress.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Modal from './components/Modal.js';
import Contact from './pages/contact/Contact.js';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null); // Track which modal content to show

  const toggleModal = (content = null) => {
    setShowModal(!showModal);
    setModalContent(content); // Update modal content type
  };

  return (
    <div className="App">
      <main className="App-main">
        <Router>
          <Navigation toggleModal={toggleModal} />
          <Routes className="content-grid">
            <Route path="/" element={<Home toggleModal={toggleModal} />} />

            {/* Currently using in progress page as 404 page */}
            <Route path="*" element={<InProgress />} />
          </Routes>
        </Router>

        {/* Dynamic Modal */}
        <Modal show={showModal} onClose={() => toggleModal(null)}>
          {modalContent === 'contact' && <Contact />}

          {modalContent === 'sigparser' && <SigParser />}
          {modalContent === 's3' && <S3 />}
        </Modal>
      </main>
    </div>
  );
}

export default App;
