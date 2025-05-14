import { useState, useEffect } from 'react';

export default function HotSaleCountdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [visible, setVisible] = useState(true); // <--- Estado para cerrar

  function calculateTimeLeft() {
    const target = new Date('2025-05-15T00:00:00');
    const now = new Date();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 🔒 No mostrar si fue cerrado
  if (!visible) return null;

  return (
    <div style={styles.fixedTop}>
      <div style={styles.popup}>
        <button onClick={() => setVisible(false)} style={styles.closeBtn}>×</button>

        <img
          src="https://www.mobo.com.mx/arquivos/images.png"
          alt="Promo Hot Sale"
          style={styles.image}
        />

        <h2 style={styles.title}>¡Termina en!</h2>
        <div style={styles.timerContainer}>
          <TimerBlock label="DIAS" value={timeLeft.days} />
          <TimerBlock label="HRS" value={timeLeft.hours} />
          <TimerBlock label="MIN" value={timeLeft.minutes} />
          <TimerBlock label="SEG" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  );
}

function TimerBlock({ label, value }) {
  return (
    <div style={styles.timerBlock}>
      <div style={styles.timerNumber}>{String(value).padStart(2, '0')}</div>
      <div style={styles.timerLabel}>{label}</div>
    </div>
  );
}

const styles = {
 fixedTop: {
    position: 'fixed',
    top:400,
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
  },
  popup: {
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '30px 20px',
    width: '320px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    position: 'relative',
    boxShadow: '0 0 20px rgba(0,0,0,0.2)',
  },
  image: {
    maxWidth: '100%',
    height: '60px',
    objectFit: 'contain',
    marginBottom: '15px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '20px',
  },
  timerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  timerBlock: {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '8px',
    padding: '10px 5px',
    width: '55px',
  },
  timerNumber: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  timerLabel: {
    fontSize: '10px',
  },
};
