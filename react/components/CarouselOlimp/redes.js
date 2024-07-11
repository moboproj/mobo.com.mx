import React, { useState, useEffect } from 'react';

export default function Redes() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
      setIsLargeScreen(window.innerWidth > 1024);
    };

    // Check the screen size on initial load
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: '40px', 
        marginBottom: '40px',
        textAlign: 'center',
        width: '100%' // Ensure the container takes the full width of the screen
      }}
    >
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: isLargeScreen ? 'row' : 'column', // Row layout for large screens, column layout for small screens
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '100%' // Ensure the container takes the full width of the screen
        }}
      >
        <p 
          id="textoSigue"
          style={{ 
            textAlign: isSmallScreen ? 'center' : 'left', // Center text on small screens, align left on large screens
            alignSelf: 'center', // Center the text vertically within the container
            width: isSmallScreen ? '100%' : 'auto', 
            marginBottom: '10px'
          }}
        >
          <strong>Síguenos en:</strong>
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://www.facebook.com/MoboMexico" target="_blank" rel="noopener noreferrer">
            <img src="/arquivos/MOBO-Olimpiadas-facebook.png" alt="Imagen 1" style={{ margin: '5px', width: '44px' }} />
          </a>
          <a href="https://www.instagram.com/mobo_oficial/" target="_blank" rel="noopener noreferrer">
            <img src="/arquivos/MOBO-Olimpiadas-instagram.png" alt="Imagen 2" style={{ margin: '5px', width: '44px' }} />
          </a>
          <a href="https://www.tiktok.com/@mobo_oficial" target="_blank" rel="noopener noreferrer">
            <img src="/arquivos/MOBO-Olimpiadas-tiktok.png" alt="Imagen 3" style={{ margin: '5px', width: '44px' }} />
          </a>
          <a href="https://www.youtube.com/@MoboMexico" target="_blank" rel="noopener noreferrer">
            <img src="/arquivos/MOBO-Olimpiadas-youtube.png" alt="Imagen 4" style={{ margin: '5px', width: '44px' }} />
          </a>
        </div>
      </div>
    </div>
  );
}
