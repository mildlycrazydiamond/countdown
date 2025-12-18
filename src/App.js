
import { useEffect, useState } from 'react';

function getDaysLeft(targetDate) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function App() {
  const target = new Date('2026-03-08T00:00:00');
  const [daysLeft, setDaysLeft] = useState(getDaysLeft(target));

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(getDaysLeft(target));
    }, 1000 * 60 * 60); // update every hour
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#0f172a',
      }}
    >
      <h1
        style={{
          fontSize: '4.5rem',
          fontWeight: 'bold',
          color: '#a5b4fc', // light indigo
          marginBottom: '0.25rem',
          textShadow: '0 2px 8px #0a0a23',
          textAlign: 'center',
        }}
      >
        Ashirwaad
      </h1>
      <h2
        style={{
          fontSize: '3rem',
          color: '#a5b4fc', // light indigo
          marginBottom: '1.5rem',
          textShadow: '0 2px 8px #0a0a23',
          textAlign: 'center',
        }}
      >
        8th March 2026
      </h2>
      <div
        style={{
          fontSize: '3.5rem',
          color: '#38bdf8', // sky blue
          marginBottom: '2rem',
          textShadow: '0 2px 12px #0a0a23',
        }}
      >
        {daysLeft} {daysLeft === 1 ? 'day' : 'days'} to go
      </div>
      <div
        className="bold-text"
        style={{
          fontSize: '3rem',
          color: '#f472b6', // pink-400
          textShadow: '0 1px 6px #0a0a23',
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        Jayati & Aditya
        {/* <br /> */}
        {/* <span role="img" aria-label="heart">❤️</span> */}
      </div>

      <img
        src={process.env.PUBLIC_URL + '/photo.jpeg'}
        alt="photo"
        style={{
          height: '15rem',
          width: 'auto',
          display: 'block',
          marginTop: '2rem',
          marginBottom: '2rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '0.5rem',
          objectFit: 'cover',
          boxShadow: '0 6px 18px rgba(0,0,0,0.6)',
          border: '1px solid rgba(255,255,255,0.06)'
        }}
      />
    </div>
  );
}