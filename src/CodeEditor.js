
import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor = ({ code, onCodeChange }) => {
  return (
    <MonacoEditor
      height="80vh"
      defaultLanguage="javascript"
      value={code}
      onChange={(value) => onCodeChange(value)} // Update the code state on change
      theme="vs-dark"
    />
  );
};

export default CodeEditor;
