// src/App.js
import React, { useState } from 'react';
import './App.css';  // Should now be found after creating App.css
import CodeEditor from './CodeEditor';
import LivePreview from './LivePreview';

const App = () => {
  const [code, setCode] = useState('// Start typing your React code here');

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>Playcode React Editor Clone</h1>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
        <div style={{ flex: 1, padding: '10px' }}>
          <CodeEditor code={code} onCodeChange={setCode} />
        </div>
        <div style={{ flex: 1, padding: '10px' }}>
          <LivePreview code={code} />
        </div>
      </div>
    </div>
  );
};

export default App;
