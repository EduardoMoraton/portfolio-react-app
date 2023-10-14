import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'
import './dracula-md.css'
import NoContent from './NoContent';

function Post({ postpath, language }) {
  const [markdownContent, setMarkdownContent] = useState('');

  const [fileExists, setFileExists] = useState(true); 
  
  useEffect(() => {
    // Fetch the content
    fetch(`${process.env.PUBLIC_URL}/blog/${postpath}/post_${language}.md`)
      .then((response) => {
        if (!response.ok) {
          setFileExists(false); 
          return '';
        }
        return response.text();
      })
      .then((data) => {
        
        if (containsMarkdownIndicators(data)) {
          setMarkdownContent(data);
        } else {
          setFileExists(false); 
        }
      })
      .catch((error) => {
        console.error('Error fetching Markdown content:', error);
        setFileExists(false); 
      });
  }, [postpath]);

  
  const containsMarkdownIndicators = (data) => {
    
    return /Date: +/.test(data); 
  };

  return (
    <>
    {fileExists ? (
      <ReactMarkdown 
      components={{
        code(props) {
          const {children, className, node, ...rest} = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter
              {...rest}
              children={String(children).replace(/\n$/, '')}
              style={dracula}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        }
      }}
      
      className={'markdown-body'}>{markdownContent}</ReactMarkdown>
    ) : (
      <NoContent/> // You can replace this with an error message or a component for non-existent files
    )}
    </>
    
    
  );
}

export default Post;
