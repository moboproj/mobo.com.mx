import { useState } from "react";

export default function DynamicPopup({ src, alt }) {
  const [isOpen, setIsOpen] = useState(true); 
  const handleClose = () => setIsOpen(false);
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
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '12px',
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
            width: '30px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}