import React, { useState } from 'react';
import './Interface.css'; // Separate CSS file for styling this component

function Interface() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('javascript');

  const handleRunCode = () => {
    // Simulate running code, this should be replaced by an actual API call
    setOutput(`Output of the code in ${language}`);
  };

  return (
    <div className="compiler-interface">
      <h1>Online Compiler</h1>
      
      {/* Flex container to hold code editor and output side by side */}
      <div className="flex-container">
        {/* Left side for code input */}
        <div className="left-panel">
          <textarea 
            value={code} 
            onChange={(e) => setCode(e.target.value)} 
            placeholder="Write your code here..."
          />
          
          <div className="language-select">
            <label htmlFor="language">Select Language:</label>
            <select 
              id="language" 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="c++">C++</option>
              <option value="java">Java</option>
            </select>
          </div>

          <button onClick={handleRunCode}>Run Code</button>
        </div>

        {/* Right side for output */}
        <div className="right-panel">
          <h3>Output:</h3>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default Interface;
