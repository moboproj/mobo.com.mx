import React, { useState, useEffect } from 'react';


export default function MenuBlogNota() {
  const handleClick = (url) => {
    window.location.href = url;
  };


  return (
    <>
      <style>
        {`
        .vtex-wordpress-integration-2-x-postMeta.t-small.mw9.c-muted-1{
        display: none;}
            .vtex-wordpress-integration-2-x-teaserImage.vtex-wordpress-integration-2-x-teaserImage{
          border-radius: 30px;
          }
          .vtex-card.card.w-100.b2.br2.bg-base.c-on-base{
            box-shadow: none !important;
          }
          .vtex-wordpress-integration-2-x-teaserTitleLink.vtex-wordpress-integration-2-x-teaserTitleLink{
              color: #000 !important;
              text-decoration: none !important;
             }
          .header-container {
            display: flex;
            justify-content: space-between; /* Espacio entre los elementos para alinearlos a los lados opuestos */
           // align-items: center; /* Alinea verticalmente los elementos en el centro */
            padding: 10px 20px; /* Añade un poco de espacio alrededor del contenido */
          }
          .title-container {
            display: flex;
            align-items: center; /* Alinea verticalmente el texto "MOBO" y "news" */
          }


          .blog-home {
            font-size: 28px;
            color: #333;
            cursor: pointer;
            transition: color 0.3s ease;
            font-weight: bold;
          }
          @media (max-width: 1025px) {

            .blog-home {
              font-size: 2.0rem;
            }
            .vtex-wordpress-integration-2-x-postTitle.t-heading-1 {
              font-size: 40px;
            }
          }
          @media (max-width: 979px) {

            .blog-home {
              font-size: 1.4rem;
            }
            .vtex-wordpress-integration-2-x-postTitle.t-heading-1 {
              font-size: 30px;
            }
          }
            @media (max-width: 607px) {
   
            .blog-home {
              font-size: 1.4rem;
            }
            .vtex-wordpress-integration-2-x-postTitle.t-heading-1 {
              font-size: 25px;
            }
          }
          @media (max-width: 470px) {

            .blog-home {
              font-size: 1.2rem;
            }
            .vtex-wordpress-integration-2-x-postTitle.t-heading-1 {
              font-size: 25px;
            }
          }

          @media (max-width: 470px) {

            .blog-home {
              font-size: 1.2rem;
            }
            .vtex-wordpress-integration-2-x-postTitle.t-heading-1 {
              font-size: 25px;
            }
          }
          @media (max-width: 391px) {

            .blog-home {
              font-size: 1.0rem;
            }
            .vtex-wordpress-integration-2-x-postTitle.t-heading-1 {
              font-size: 25px;
            }
          }

          .blog-home:hover {
            color: #0000ff; /* Cambia el color al pasar el ratón */
          }
            .vtex-wordpress-integration-2-x-categoryBlockLink.vtex-wordpress-integration-2-x-categoryBlockLink--CategNoticias{
            display: none;
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
            .buttons-container2{
                display: flex;
                gap: 70px;
            }
          @media (max-width: 656px) {
              .buttons-container2{
                display: flex;
                gap: 30px;
            }
          }
          @media (max-width: 522px) {
              .buttons-container2{
                display: flex;
                gap: 10px;
            }
          }
            .imgtitulo{
              width: 30%;
            }
              @media (max-width: 1002px){
               .imgtitulo{
                  width: 60%;
                }
              }
              @media (max-width: 618px){
               .imgtitulo{
                  width: 70%;
                }
              }
              @media (max-width: 446px){
               .imgtitulo{
                  width: 80%;
                }
              }
              @media (max-width: 381px){
               .imgtitulo{
                  width: 90%;
                }
              }
        `}
      </style>
      
            <div className="header-container">
            <div className="title-container">
          <img src='/arquivos/Mobo_News.png' className='imgtitulo'></img>
        </div>
          <div className="buttons-container2">
            <div
              className="blog-home"
              onClick={() => handleClick('https://www.mobo.com.mx/blog/?categoryId=15')}
              >
                Noticias
              </div>
            <div
              className="blog-home"
              onClick={() => handleClick('https://www.mobo.com.mx/blog/?categoryId=16')}
          >
            Reseña
          </div>
            <div
              className="blog-home"
              onClick={() => handleClick('https://www.mobo.com.mx/blog/?categoryId=17')}
              >
                Tips
              </div>
          </div>
      </div>
    </>
  );
}
