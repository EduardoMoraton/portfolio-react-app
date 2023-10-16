# Welcome to My Tech Blog 📚👨‍💻

> Date: 01-10-2023


----


Hello!, esteemed readers and tech enthusiasts! 🌟 It is with great excitement that I launch my inaugural blog post, dedicated to the world of programming, software development, and technology. 🚀

## What Awaits You 🤔


Array of content:

```js
const arrayOfContent = [
  {
    title: "Code Concepts 💡",
    description: [
      "Prepare to journey into the world of intriguing code snippets,",
      "project insights, and mind-boggling programming challenges that",
      "will spark your innovation. Get ready for practical demonstrations",
      "in languages like Python 🐍, Java ☕, and more!",
    ],
  },
  {
    title: "Development Discourse 📖",
    description: [
      "Embark on an exciting expedition behind the scenes of my recent",
      "development endeavors. Here, I'll candidly share my triumphs,",
      "tribulations, and invaluable insights gained from crafting",
      "compelling software applications.",
    ],
  },
  {
    title: "Exploring Technology 🤓",
    description: [
      "Dive deep into the dynamic realm of backend and frontend technologies.",
      "Join me as we explore everything from web development frameworks to",
      "server-side scripting. Get ready for a comprehensive journey through",
      "the ever-evolving world of tech!",
    ],
  },
];
```

## How I did this blog

Well as you can notice this entire blog is made with React, im using the [Tailwind](https://tailwindcss.com/) library for styles and the cool animation of the home page is made using [AtroposJS](https://atroposjs.com/)

### The blog

The blog is done by stroring the blog posts as markdown files in a public folder, then a *Post* react component will do a request for getting the raw text data of that file by searching by the contetn in the url, then the last step its rendering

```js
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
```
> The part of the component used to retrive the data from the markdown file
