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
      }}
    >
      <div
        style={{
          /*position: 'relative',*/
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="https://mobomx.vteximg.com.br/arquivos/cupon_image.jpg"
          alt="ZAGG"
          style={{ cursor: 'default', maxWidth: '50%', maxHeight: '80%' }}
          // onClick={handleRedirect}
        />
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: 15,
            right: 15,
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            color: '#fff',
            fontSize: '24px',
            cursor: 'pointer',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
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
