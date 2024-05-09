import React, { useState, useEffect } from 'react';
import styles from './styles.css'

const HolaMundo = () => {
  // Fecha objetivo (23 de mayo)
  const targetStartDate = new Date('May 15, 2024 00:00:00').getTime();
  const targetEndDate = new Date('May 23, 2024 00:00:00').getTime();

  // Estado para almacenar el tiempo restante
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Función para calcular el tiempo restante
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    let difference;

    if (now < targetStartDate) {
      difference = targetStartDate - now;
    } else if (now < targetEndDate) {
      difference = targetEndDate - now;
    } else {
      difference = 0;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  // Función para actualizar el tiempo restante cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`${styles.providersWrapper}`}>
      <h5 className={`${styles.providers}`}>VENTA EXPLOSIVA 15 AL 23 DE MAYO FALTAN: {timeRemaining.days} DÍAS {timeRemaining.hours < 10 ? `0${timeRemaining.hours}` : timeRemaining.hours}:{timeRemaining.minutes < 10 ? `0${timeRemaining.minutes}` : timeRemaining.minutes}:{timeRemaining.seconds < 10 ? `0${timeRemaining.seconds}` : timeRemaining.seconds}</h5>
      {/* <p style={{ display: 'inline-block', margin: 0 }}>FALTAN: {timeRemaining.days} DÍAS {timeRemaining.hours < 10 ? `0${timeRemaining.hours}` : timeRemaining.hours}:{timeRemaining.minutes < 10 ? `0${timeRemaining.minutes}` : timeRemaining.minutes}:{timeRemaining.seconds < 10 ? `0${timeRemaining.seconds}` : timeRemaining.seconds}</p> */}
    </div>

  );
};

export default HolaMundo;
