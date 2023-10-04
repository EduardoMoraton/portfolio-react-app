import { Icon } from '@iconify/react'
import React from 'react'

function BlogItem({data}) {
  return (
    <div className={'bg-currentLine group transition border-purple border-2 w-full p-4 flex my-2 rounded-xl'}>
       
        <img src={data.img==null?"blog/"+data.link+"/image.gif":data.img} className={'w-[150px] rounded-xl mr-3'}></img>
        <div className={'w-full'}>
        <p className={'text-cyan text-xl'}>{data.name}</p>
        <p>{data.demo}</p>
        <div className={'w-full'}>
          <div className={'text-pink'}>
          {data.time}
          </div>
          <div className={'flex justify-end items-end w-full flex-grow'}>
            <a href={"blog/"+data.link} className={'opacity-0 group-hover:opacity-100 transition text-purple'}>Go to full post </a>
          </div>
        </div>
        </div>
    </div>
  )
}

export default BlogItem
