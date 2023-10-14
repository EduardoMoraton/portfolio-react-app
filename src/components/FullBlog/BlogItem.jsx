import { Icon } from '@iconify/react'
import React from 'react'

function BlogItem({data}) {
  console.log(document.location)
  const posturl = document.location.origin+"/blog/"+data.link
  const go = () => {window.location.href = posturl;}
  return (
    

    <div className={'bg-currentLine group hover:bg-comment hover:cursor-pointer transition border-purple border-2 w-full p-4 flex my-2 rounded-xl'} onClick={go}>
       
        <img src={data.img==null?document.location.origin+"/blog/"+data.link+"/image.gif":data.img} className={'w-[150px] h-[150px] rounded-xl mr-3'}></img>
        <div className={'w-full'}>
          <p className={'text-cyan text-xl'}>{data.name}</p>
          <p>{data.demo}</p>
          <div className={'w-ful  '}>
            <div className={'text-pink'}>
            {data.time}
            </div>
          </div>
        </div>
        <div className={'w-[100px] flex justify-center items-center text-5xl text-currentLine -translate-x-5 group-hover:translate-x-0 transition'}>
          <Icon icon="solar:arrow-right-outline" />
        </div>
    </div>
  )
}

export default BlogItem
