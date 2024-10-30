import React from 'react';
import ReactJson from 'react-json-view';

interface JsonViewerProps {
  data: any;
}

export function JsonViewer({ data }: JsonViewerProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-h-[80vh] overflow-auto">
      <ReactJson
        src={data}
        theme="monokai"
        style={{ 
          backgroundColor: 'transparent',
          fontSize: '14px',
          fontFamily: 'monospace'
        }}
        displayDataTypes={false}
        enableClipboard={true}
        collapsed={1}
        displayObjectSize={false}
        name={false}
        quotesOnKeys={false}
        sortKeys={true}
        indentWidth={2}
      />
    </div>
  );
}