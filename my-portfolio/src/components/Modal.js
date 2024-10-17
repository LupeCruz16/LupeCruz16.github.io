import React from 'react';

const Modal = ({ show, onClose, children, title = null }) => {
  if (!show) {
    return null;
  }

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const contentStyle = {
    background: 'black',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    maxHeight: '90vh',
    overflowY: 'auto',
    width: '80%',
    position: 'relative',
  };

  const topBarStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: title ? 'space-between' : 'flex-end',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: '4px solid #433bff',
    zIndex: 1001,
  };

  const closeButtonStyle = {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        {/* Sticky Top Bar with X to Close */}
        <div style={topBarStyle}>
          {title && <p>{title}</p>} {/* Only show if title is not null */}
          <button style={closeButtonStyle} onClick={onClose}>
            &times;
          </button>
        </div>
        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
