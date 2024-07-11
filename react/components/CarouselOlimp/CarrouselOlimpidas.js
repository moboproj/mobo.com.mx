import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  background-color: #e6303d;
  width: 100%;
  height: 50px;
  text-align: center;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1343px) {
    /* Cambia los estilos aquí */
      height: 40px;
    background-color: #e6303d; /* ejemplo de cambio de color */
  }
`;

export default function CarrouselOlimpidas() {
  return (
    <div style={{ width: '100%' }}>
      <Header>
        <h1 style={{ color: 'white', margin: '0 10px', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '1rem', marginRight: '10px' }}>Haz historia con</span>
          <img src="/arquivos/MOBO-Olimpiadas_LOGO_HEADER.png" alt="Descripción de la imagen" style={{ width: '120px', height: 'auto', marginLeft: '-5px' }} />
        </h1>
      </Header>
    </div>
  );
}


