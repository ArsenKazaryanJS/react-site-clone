import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark ,coy} from 'react-syntax-highlighter/dist/esm/styles/prism';
import './codeBlock.css'

const CodeBlock = ({ theme,sampleCode}) => {
  const customStyle_Coy = {
    ...coy,
    'pre[class*="language-"]': {
      ...coy['pre[class*="language-"]'],
      background: 'rgb(253, 253, 253)', // Light background
      borderRadius: '0px ', // Rounded corners
      padding: '16px', // Padding for spacing
      margin: '0px 0px 0px 0px', // Remove default margin
    },
  };
  const customStyle_oneDark = {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      borderRadius: '0px ', // Rounded corners

      padding: '16px', // Padding for spacing
      margin: '0px 0px 0px 0px', // Remove default margin
    },
  };
  return (
    <div className="code_block">
      <div className="vd">
        <p>Video.js</p>
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={theme === 'light' ? customStyle_Coy : customStyle_oneDark}
      >
        {sampleCode}
      </SyntaxHighlighter>
    </div>
  );
};


export default CodeBlock;