import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import './dracula-md.css'

function Post({ postpath }) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/blog/${postpath}/post_en.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => setMarkdownContent(data))
      .catch((error) => console.error('Error fetching Markdown content:', error));
  }, [postpath]);

  console.log(markdownContent)

  return (

    <ReactMarkdown className={'markdown-body'}>{markdownContent}</ReactMarkdown>
  );
}

export default Post;
