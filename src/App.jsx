import React, { useState, useCallback, useEffect } from 'react';

const App = () => {
  const [randomString, setRandomString] = useState('');
  const [length, setLength] = useState(8);

  const generateRandomString = useCallback(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomString(result);
  }, [length]);

  useEffect(() => {
    if (randomString) {
      console.log('New random string generated:', randomString);
    }
  }, [randomString]);

  const handleMouseEnter = (e) => {
    e.target.style.background = 'none';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'rgb(5, 6, 45)';
  };

  const handleMouseDown = (e) => {
    e.currentTarget.style.transform = 'scale(0.95)';
  };

  const handleMouseUp = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const buttonStyle = {
    alignItems: 'center',
    backgroundImage: 'linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)',
    border: 0,
    borderRadius: '6px',
    boxShadow: 'rgba(151, 65, 252, 0.2) 0 8px 15px -5px',
    boxSizing: 'border-box',
    color: '#ffffff',
    display: 'flex',
    fontSize: '14px',
    justifyContent: 'center',
    lineHeight: '1em',
    minWidth: '100px',
    padding: '2px',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    transition: 'all 0.3s',
    marginLeft: '10px',
  };

  return (
    <div style={styles.container}>
      <h2 style={buttonStyle}>🔐 Random String Generator</h2>

      <div style={styles.inputRow}>
        <input
          type="number"
          min="8"
          max="1000"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          style={styles.input}
        />

        <button
          style={buttonStyle}
          onClick={generateRandomString}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <span
            style={styles.spanStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Generate
          </span>
        </button>
      </div>

      <div style={styles.result}>
        <strong>Generated String:</strong> {randomString}
      </div>
    </div>
  );
};

const styles = {
  container: {
   width: '600px',
   height: '500px',
    margin: '50px auto',
    padding: '40px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial',
  },
  inputRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    width: '80px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  spanStyle: {
    backgroundColor: 'rgb(5, 6, 45)',
    padding: '10px 14px',
    borderRadius: '4px',
    width: '100%',
    height: '100%',
    transition: '300ms',
    display: 'flex',
    justifyContent: 'center',
  },
  result: {
    marginTop: '20px',
    wordBreak: 'break-all',
  },
};

export default App;




