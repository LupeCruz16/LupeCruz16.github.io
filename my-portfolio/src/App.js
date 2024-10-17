import './globalCSS/common.css';
import './globalCSS/constants.css';
import { useState } from 'react';

// Navigation Paths
import S3 from './pages/s3/S3.js';
import Home from './pages/home/Home.js';
import SigParser from './pages/sigparser/SigParser.js';
import InProgress from './pages/inProgress/inProgress.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Navigation from './components/navigation/Navigation.js';
import Modal from './components/Modal.js';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null); // Track which modal content to show
  const [modalTitle, setModalTitle] = useState(null); // For storing title

  const toggleModal = (content = null, title = null) => {
    setShowModal(!showModal);
    setModalContent(content); // Update modal content type
    setModalTitle(title);
  };

  return (
    <div className="App">
      <main className="App-main">
        <Router>
          <Navigation />
          <Routes className="content-grid">
            <Route path="/" element={<Home toggleModal={toggleModal} />} />

            {/* Currently using in progress page as 404 page */}
            <Route path="*" element={<InProgress />} />
          </Routes>
        </Router>

        {/* Dynamic Modal */}
        <Modal
          show={showModal}
          onClose={() => toggleModal(null, null)}
          title={modalTitle}
        >
          {modalContent === 'sigparser' && <SigParser />}
          {modalContent === 's3' && <S3 />}
        </Modal>
      </main>
    </div>
  );
}

export default App;
