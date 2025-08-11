import React, { useState } from 'react';

export default function ModalRedirectOverlay() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  // const handleRedirect = () => {
  //   window.location.href = 'https://www.mobo.com.mx/teclados%20zagg?_q=teclados%20zagg&map=ft';
  // };

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
        padding: '1rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <img
          src="https://mobomx.vteximg.com.br/arquivos/PopUp_BTS_1024x1024.jpg"
          alt="ZAGG"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            display: 'block',
          }}
          // onClick={handleRedirect}
        />
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            background: 'rgba(0,0,0,0.6)',
            border: 'none',
            color: '#fff',
            fontSize: '18px',
            cursor: 'pointer',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
