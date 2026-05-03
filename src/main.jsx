import { createRoot } from 'react-dom/client';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
        background: 'radial-gradient(circle at top, #1a1a2e, #0f0f1a)',
        color: 'white',
        padding: '20px',
        textAlign: 'center'
      }}
    >
      <h1 style={{ fontSize: '42px', marginBottom: '10px' }}>
        Ambient Sound Mixer
      </h1>

      <p style={{ opacity: 0.7, marginBottom: '30px' }}>
        Simple interface with clean aesthetics
      </p>

      <div
        style={{
          padding: '30px',
          borderRadius: '16px',
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center'
        }}
      >
        <h2 style={{ margin: 0 }}>Counter: {count}</h2>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 18px',
            borderRadius: '10px',
            border: 'none',
            background: '#7c5cff',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: '0.2s'
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);