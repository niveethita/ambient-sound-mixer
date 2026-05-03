/*function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;*/

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '30px' }}>
      <h1>Hello React!</h1>
      <p>This is my App component.</p>

      <button
        style={{
          padding: '10px 16px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;