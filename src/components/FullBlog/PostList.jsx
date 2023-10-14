import React from 'react'
import { Icon } from '@iconify/react'
import Blog from '../Blog'
import Footer from '../Footer'
import { blog } from "../../data";
import BlogItem from './BlogItem';


function PostList({skill}) {
    const mostRecentPosts = blog
    .slice()
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))

  return (
    <div>
      <div className={'h-screen'}>
        <div className={'w-full m-10 p-5 bg-currentLine rounded-xl'}>
            <h1 className={'text-6xl text-green'}>All posts:</h1>
            <div className={'flex-col'}>
                {mostRecentPosts.map((post, index)=>(
                    <BlogItem data={post}></BlogItem>
                ))}
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default PostList
