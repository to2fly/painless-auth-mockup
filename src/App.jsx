
import React, { useState } from 'react';
import { authCodes } from './mockData';

function App() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    if (authCodes[code]) {
      const data = authCodes[code];
      data.uses++;
      if (data.uses > 20) {
        alert("Warning: This tag has been entered 20+ times. It may be fake.");
      }
      setResult({ legit: true, ...data });
    } else {
      setResult({ legit: false });
      const audio = new Audio('/sounds/fart.mp3');
      audio.play();
    }
  };

  return (
    <div style={{ fontFamily: 'monospace', textAlign: 'center', paddingTop: '100px' }}>
      {!result && (
        <>
          <h2 style={{ animation: 'typing 2s steps(30, end)' }}>enter tag number</h2>
          <input value={code} onChange={e => setCode(e.target.value)} maxLength={9} />
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
      {result && result.legit && (
        <>
          <img src={result.image} style={{ width: '300px', marginTop: '20px' }} />
          <h1 style={{ color: 'green' }}>LEGIT</h1>
          <p>{result.description}</p>
        </>
      )}
      {result && !result.legit && (
        <h1 style={{ fontSize: '80px' }}>:(</h1>
      )}
    </div>
  );
}

export default App;
