
import React, { useState, useEffect } from 'react';

export default function Menublogcustom({ onCategorySelect }) {
  const [currentUrl, setCurrentUrl] = useState('');
  const urlmenu = 'https://www.mobo.com.mx/blog';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleClick = (categoryId) => {
    onCategorySelect(categoryId); // Sends categoryId to the parent component
  };

  const getButtonStyle = (url) => ({
    fontSize: '28px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    fontWeight: 'bold',
    color: currentUrl === url ? '#0000ff' : 'black',
  });

  return (
    <>
      <style>
        {`
        .vtex-wordpress-integration-2-x-listTitle.t-heading-2.tc{
            display: none;
        }
          .vtex-wordpress-integration-2-x-categoryBlockTitle.vtex-wordpress-integration-2-x-categoryBlockTitle.tc.t-heading-2 {
            display: none;
          }
          .vtex-card.card.w-100.b2.br2.bg-base.c-on-base {
            box-shadow: none !important;
          }
          .vtex-wordpress-integration-2-x-teaserTitleLink.vtex-wordpress-integration-2-x-teaserTitleLink {
            color: #000 !important;
            text-decoration: none !important;
          }
          .vtex-wordpress-integration-2-x-teaserImage.vtex-wordpress-integration-2-x-teaserImage{
          border-radius: 30px;
          }
         
  
          .vtex-wordpress-integration-2-x-categoryBlockFlex {
            display: flex;
            flex-wrap: wrap; /* Permite que los elementos se envuelvan en filas */
            justify-content: space-between; /* Espacio uniforme entre elementos */
          }
          .vtex-wordpress-integration-2-x-categoryBlockFlex > div {
            flex: 0 1 calc(50% - 10px); /* Ancho del 50% menos un margen para separación */
            margin-bottom: 10px; /* Espacio entre filas */
            box-sizing: border-box; /* Incluye el padding y el borde en el ancho total */
          }

          @media (max-width: 1024px) {
            .vtex-wordpress-integration-2-x-categoryBlockFlex {
              flex-direction: column; /* Coloca los elementos en una sola columna */
            }
            .vtex-wordpress-integration-2-x-categoryBlockFlex > div {
              flex: 1 0 100%; /* Cada elemento ocupa el 100% del ancho */
              margin-bottom: 10px; /* Espacio entre filas */
            }
          }

          .vtex-wordpress-integration-2-x-categoryBlockLink.vtex-wordpress-integration-2-x-categoryBlockLink--CategNoticias {
           display: flex;
                  justify-content: center; /* Centra horizontalmente */
                  align-items: center; /* Centra verticalmente (si es necesario) */
          }
          .vtex-wordpress-integration-2-x-categoryBlockLink.vtex-wordpress-integration-2-x-categoryBlockLink--categresena {
           display: flex;
                  justify-content: center; /* Centra horizontalmente */
                  align-items: center; /* Centra verticalmente (si es necesario) */
          }
          .vtex-wordpress-integration-2-x-categoryBlockLink.vtex-wordpress-integration-2-x-categoryBlockLink--CategTips {
           display: flex;
                  justify-content: center; /* Centra horizontalmente */
                  align-items: center; /* Centra verticalmente (si es necesario) */
          }
          .prueba{
            margin-top:10px;
          }
          .imgheaderblog{
            width:20%;
          }
            @media (max-width: 755px) {
            .imgheaderblog{
                width:40%;
              }
            }
            @media (max-width: 431px) {
            .imgheaderblog{
                width: 50%;
              }
            }
          .title-container {
            text-align: center;
            display: flex;
            justify-content: center; /* Centra el contenido horizontalmente */
            align-items: center; /* Centra el contenido verticalmente */
          }
          .buttons-container {
              display: flex;
              margin-button: 10px;
              justify-content: center;
              gap: 155px;
              padding: 10px;
            }

            @media (max-width: 950px) {
              .buttons-container {
                gap: 50px; /* Reduce el espacio entre los botones */
                padding: 5px; /* Reduce el padding */
              }
              .buttons-container > div {
                font-size: 20px; /* Reduce el tamaño de la fuente */
              }
            }

                @media (max-width: 613px) {
              .buttons-container {
                gap: 30px; /* Reduce el espacio entre los botones */
                padding: 5px; /* Reduce el padding */
              }
              .buttons-container > div {
                font-size: 20px; /* Reduce el tamaño de la fuente */
              }
            }
        `}
      </style>
      <div className="prueba">
        <div className="title-container">
          <img src='/arquivos/Mobo_News.png' className='imgheaderblog' alt="Mobo News" />
        </div>
        <div className="buttons-container">
          <div style={getButtonStyle(`${urlmenu}?categoryId=15`)} onClick={() => handleClick(3)}>
            Noticias
          </div>
          <div style={getButtonStyle(`${urlmenu}?categoryId=16`)} onClick={() => handleClick(14)}>
            Reseña
          </div>
          <div style={getButtonStyle(`${urlmenu}?categoryId=17`)} onClick={() => handleClick(8)}>
            Tips
          </div>
        </div>
      </div>
    </>
  );
}