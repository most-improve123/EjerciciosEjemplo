import React from 'react';

const Modal = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{product.title}</h2>
        <p>{product.summary}</p>
      </div>
    </div>
  );
};

export default Modal;
