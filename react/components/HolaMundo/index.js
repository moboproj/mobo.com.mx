import React, { useState, useEffect } from 'react';
import styles from './styles.css';

const HolaMundo = () => {
  const targetStartDate = new Date('May 15, 2025 00:00:00').getTime();
  const targetEndDate = new Date('June 3, 2025 00:00:00').getTime();

  const [contador, setContador] = useState(calculateTimeRemaining());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [fade, setFade] = useState(false);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    let difference;
    let textov;

    if (now < targetStartDate) {
      difference = targetStartDate - now;
      textov = "Días para Venta Explosiva:";
    } else if (now < targetEndDate) {
      difference = targetEndDate - now;
      textov = "Días Restantes Venta Explosiva:";
    } else {
      difference = 0;
      textov = "Evento finalizado";
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, textov };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setContador(calculateTimeRemaining());
    }, 1000);

    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const slideInterval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % 2);
        setFade(false);
      }, 300);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [isMobile]);

  const slides = [
    contador.textov,
    `${contador.days} días ${contador.hours.toString().padStart(2, '0')}:${contador.minutes.toString().padStart(2, '0')}:${contador.seconds.toString().padStart(2, '0')}`,
  ];

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setFade(false);
    }, 300);
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 300);
  };

  return (
    <div className={styles.providersWrapper}>
      {isMobile ? (
        <div className={styles.sliderContainer}>
          <button onClick={handlePrev} className={`${styles.arrow} ${styles.leftArrow}`}>‹</button>
          <h5 className={`${styles.slideContent} ${fade ? styles.fade : ''}`}>
            {slides[currentSlide]}
          </h5>
          <button onClick={handleNext} className={`${styles.arrow} ${styles.rightArrow}`}>›</button>
        </div>
      ) : (
        <h5 className={styles.providers}>
          {contador.textov}{" "}
          {contador.days} días{' '}
          {contador.hours.toString().padStart(2, '0')}:
          {contador.minutes.toString().padStart(2, '0')}:
          {contador.seconds.toString().padStart(2, '0')}
        </h5>
      )}
    </div>
  );
};

export default HolaMundo;
