import React from 'react';

const Modal = ({ show, onClose, children, title = null }) => {
  if (!show) {
    return null;
  }

  const styles = `
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-content {
      background: black;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      max-height: 90vh;
      overflow-y: auto;
      width: 80%;
      position: relative;
      scrollbar-width: thin; /* Firefox scrollbar */
      scrollbar-color: #555 #222;
    }

    .modal-top-bar {
      position: sticky;
      top: 0;
      background-color: black;
      display: flex;
      justify-content: ${title ? 'space-between' : 'flex-end'};
      align-items: center;
      padding: 10px 20px;
      border-bottom: 4px solid #433bff;
      z-index: 1001;
    }

    .modal-close-button {
      background: transparent;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
    }

    /* Custom scrollbar for WebKit browsers */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #222;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #555;
      border-radius: 10px;
      border: 2px solid #222;
    }

    @media only screen and (max-width: 425px) {
      .modal-content {
        width: 100%;
        max-height: 80vh;
      }
    }
  `;

  return (
    <>
      {/* Inject CSS styles */}
      <style>{styles}</style>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* Sticky Top Bar with X to Close */}
          <div className="modal-top-bar">
            {title && <p>{title}</p>}
            <button className="modal-close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          {/* Modal Content */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
