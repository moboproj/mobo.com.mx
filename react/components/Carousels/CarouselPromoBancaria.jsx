import React, { Component } from "react";
import Slider from "react-slick";
import '../../css/CarouselHome.css'

export default class CenterMode extends Component {
    render() {
      const mystyle = {
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 15,
        maxWidth: "95%"
      };
      const settings = {
        className: "center",
        lazyLoad: true,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1,
                arrows: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        <div style={{marginTop: 10}}>
          <Slider {...settings}>
            <div className="img-carrusel" >
              <img className="img-carrusel" src="https://mobomx.vteximg.com.br/arquivos/Pasarela-formas-de-pago-Kueski.png" style={mystyle}/>
            </div>
            <div className="img-carrusel" >
                <img className="img-carrusel" src="https://mobomx.vteximg.com.br/arquivos/Pasarela-formas-de-pago-Aplazo.png" style={mystyle}/>
            </div>
            <div className="img-carrusel"  >
                <img className="img-carrusel" src="https://mobomx.vteximg.com.br/arquivos/Pasarela-formas-de-pago-Nu.png" style={mystyle}/>
            </div>
            <div className="img-carrusel" >
              <img className="img-carrusel" src="https://mobomx.vteximg.com.br/arquivos/Pasarela-formas-de-pago-PayPal.png" style={mystyle}/>
            </div>
          </Slider>
        </div>
      );
    }
  }