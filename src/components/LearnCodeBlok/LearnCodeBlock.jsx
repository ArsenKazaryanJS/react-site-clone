import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark ,coy} from 'react-syntax-highlighter/dist/esm/styles/prism';
import './learnCodeBlock.css'

export const LearnCodeBlock = ({ theme,sampleCode}) => {
  
  const customStyle_Coy = {
    ...coy,
    'pre[class*="language-"]': {
      ...coy['pre[class*="language-"]'],
      background: 'rgb(253, 253, 253)', 
      borderRadius: '0px ',
      padding: '16px', 
      margin: '0px 0px 0px 0px', 
    },
  };
  const customStyle_oneDark = {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      borderRadius: '0px ', 
      padding: '16px', 
      margin: '0px 0px 0px 0px', 
    },
  };


  return (
    <div className="code_block">
      <SyntaxHighlighter
        language="javascript"
        style={theme === 'light' ? customStyle_Coy : customStyle_oneDark}
      >
        {sampleCode}
      </SyntaxHighlighter>
    </div>
  );
};

