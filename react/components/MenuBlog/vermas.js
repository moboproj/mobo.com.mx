import React, { useState, useEffect } from 'react';

export default function vermas() {
    const [visibleCount, setVisibleCount] = useState(4); // Inicializa a 4 para mostrar 4 elementos por defecto

  useEffect(() => {
    // Función para actualizar la visibilidad de los elementos
    const updateVisibility = () => {
      const items = document.querySelectorAll('.vtex-wordpress-integration-2-x-listFlexItem');
      items.forEach((item, index) => {
        if (index < visibleCount) {
          item.style.display = 'block'; // Muestra los elementos hasta el número especificado
        } else {
          item.style.display = 'none'; // Oculta los elementos restantes
        }
      });
    };

    updateVisibility();
  }, [visibleCount]);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 4); // Aumenta el número de elementos visibles
  };
  return (
    <div>
    <div>
      <button
        onClick={handleShowMore}
        style={{
          background: 'none',  // Quitar el fondo
          fontWeight: 'bold',  // Texto en negrita
          color: 'gray',       // Color gris
          border: 'none',      // Opcional: quita el borde del botón
          padding: '10px 20px', // Opcional: añade algo de relleno
          cursor: 'pointer',   // Opcional: cambia el cursor al pasar sobre el botón
          display: 'block', 
          margin: '20px auto'
        }}
      >
        Mostrar más...
      </button>
    </div>
  </div>
  )
}
