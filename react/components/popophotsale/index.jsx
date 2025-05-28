import { useState, useEffect } from "react";

export default function HotSaleCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [visible, setVisible] = useState(true);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentLink, setCurrentLink] = useState(null);

  function getCurrentPhase() {
    const now = new Date();

    const phases = [
      {
        name: "Protección",
        start: new Date("2025-05-27T00:00:00"),
        end: new Date("2025-05-28T23:59:59"),
        src: "https://www.mobo.com.mx/arquivos/hotssale2025preteccion.png",
        hrf: "https://www.mobo.com.mx/proteccion?order=OrderByBestDiscountDESC",
      },
      {
        name: "Tecnología",
        start: new Date("2025-05-29T00:01:00"),
        end: new Date("2025-05-30T23:59:59"),
        src: "https://www.mobo.com.mx/arquivos/hotssale2025tecnologia.png",
        hrf: "https://www.mobo.com.mx/tecnologia/wearables?order=OrderByBestDiscountDESC",
      },
      {
        name: "Audio",
        start: new Date("2025-05-31T00:01:00"),
        end: new Date("2025-06-01T23:59:59"),
        src: "https://www.mobo.com.mx/arquivos/hotssale2025audio.png",
        hrf: "https://www.mobo.com.mx/audio/audifonos?order=OrderByBestDiscountDESC",
      },
      {
        name: "Carga",
        start: new Date("2025-06-02T00:01:00"),
        end: new Date("2025-06-03T23:59:59"),
        src: "https://www.mobo.com.mx/arquivos/hotssale2025carga.png",
        hrf: "https://www.mobo.com.mx/carga?order=OrderByBestDiscountDESC",
      },
    ];

    return (
      phases.find((phase) => now >= phase.start && now <= phase.end) || null
    );
  }

  function calculateTimeLeft(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

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
    const updatePhase = () => {
      const phase = getCurrentPhase();
      if (phase) {
        setTimeLeft(calculateTimeLeft(phase.end));
        setCurrentImage(phase.src);
        setCurrentLink(phase.hrf);
      } else {
        setVisible(false);
      }
    };

    updatePhase();
    const timer = setInterval(updatePhase, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.fixedTop}>
      <div style={styles.popup}>
        <div style={styles.imageContainer}>
          <button onClick={() => setVisible(false)} style={styles.closeBtn}>
            ×
          </button>

          {currentImage && currentLink && (
            <a href={currentLink} target="_blank" rel="noopener noreferrer">
              <img
                src={currentImage}
                alt="Promo Hot Sale"
                style={styles.image}
              />
            </a>
          )}
        </div>

        <div style={{    padding: "10px 20px",}}>
          <h2 style={styles.title}>¡Termina en!</h2>
          <div style={styles.timerContainer}>
            <TimerBlock label="DIAS" value={timeLeft.days} />
            <TimerBlock label="HRS" value={timeLeft.hours} />
            <TimerBlock label="MIN" value={timeLeft.minutes} />
            <TimerBlock label="SEG" value={timeLeft.seconds} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimerBlock({ label, value }) {
  return (
    <div style={styles.timerBlock}>
      <div style={styles.timerNumber}>{String(value).padStart(2, "0")}</div>
      <div style={styles.timerLabel}>{label}</div>
    </div>
  );
}

const styles = {
fixedTop: {
  position: "fixed",
  top: "50%",
  left: 0,
  transform: "translateY(-50%)",
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
},

  popup: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    width: "320px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  },
  imageContainer: {
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: "8px",
    right: "12px",
    background: "transparent",
    border: "none",
    fontSize: "24px",
    color: "#fff",
    textShadow: "0 0 5px black",
    cursor: "pointer",
    zIndex: 2,
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "12px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "20px",
    marginTop: "20px",
    marginBottom: "10px",
  },
  timerContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  timerBlock: {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "8px",
    padding: "10px 5px",
    width: "55px",
  },
  timerNumber: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  timerLabel: {
    fontSize: "10px",
  },
};
