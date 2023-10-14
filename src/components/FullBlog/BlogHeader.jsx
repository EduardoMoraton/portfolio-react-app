import { Icon } from '@iconify/react'
import React, { useEffect, useState } from "react";
import { programmingMessages } from '../../data'

function BlogHeader({data}) {
    const [randomMessage, setRandomMessage] = useState('');

    useEffect(() => {
    const randomIndex = Math.floor(Math.random() * programmingMessages.length);
    setRandomMessage(programmingMessages[randomIndex]);
    }, []);

  return (
    <div className={'flex w-screen justify-center h-20 bg-currentLineBackDrop backdrop-blur-lg fixed md-20px items-center'}>
        <div className={'absolute w-full flex justify-center items-center'}>
            <h1 className={'text-5xl text-green'}>Eduardo Moratón - Blog</h1>
        </div>
        <div className={'relative top-10 left-32 animate-[wiggle_10s_ease-in-out_infinite] bg-comment text-orange shadow-2xl p-2 rounded-lg'}>
            {randomMessage}
        </div>
    </div>
  )
}

export default BlogHeader
