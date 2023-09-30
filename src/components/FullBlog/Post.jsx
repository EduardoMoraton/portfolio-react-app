import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Post({ postpath }) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Use fetch or axios to retrieve the Markdown file content
    fetch(`../../blog/${postpath}/post_en.md`)
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data))
      .catch((error) => console.error('Error fetching Markdown content:', error));
  }, [postpath]);

  return (
    <Markdown remarkPlugins={[remarkGfm]}>{markdownContent}</Markdown>
  );
}

export default Post;
