/*
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <h1>Hello React!</h1>
);

*/

import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{
      fontFamily: 'Arial',
      textAlign: 'center',
      padding: '50px'
    }}>
      <h1>Welcome to React</h1>
      <p>This is my first React interface.</p>
      
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Click Me
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);