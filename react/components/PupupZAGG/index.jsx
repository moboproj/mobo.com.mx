import React, { useState } from 'react';

export default function ModalRedirectOverlay() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  const handleRedirect = () => {
    window.location.href = 'https://www.mobo.com.mx/teclados%20zagg?_q=teclados%20zagg&map=ft';
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div style={{ position: 'relative' }}>
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '24px',
            cursor: 'pointer',
          }}
        >
          ×
        </button>
        <img
          src="https://mobomx.vteximg.com.br/arquivos/ZAGG.png"
          alt="ZAGG"
          style={{ cursor: 'pointer' }}
          onClick={handleRedirect}
        />
      </div>
    </div>
  );
}
