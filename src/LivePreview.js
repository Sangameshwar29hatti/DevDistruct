// src/LivePreview.js
import React, { useEffect, useRef } from 'react';

const LivePreview = ({ code }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentWindow.document;

    // Clear the iframe content before rendering new code
    iframeDoc.open();
    iframeDoc.write('<html><head></head><body></body></html>');
    iframeDoc.close();

    // Inject code into the iframe's body
    const script = iframeDoc.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = code;
    iframeDoc.body.appendChild(script);
  }, [code]);

  return <iframe ref={iframeRef} title="Live Preview" style={{ width: '100%', height: '100%' }} />;
};

export default LivePreview;
