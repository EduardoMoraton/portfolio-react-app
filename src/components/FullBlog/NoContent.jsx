import React from 'react'
import { Icon } from '@iconify/react'
import Blog from '../Blog'

function NoContent({skill}) {
  return (
    <div className={'h-screen'}>
      <div className={'flex flex-col w-full bg-currentLine rounded-lg my-10'}>
        <div className={'flex justify-center items-center text-yellow text-6xl p-5'}>
            <Icon icon={'ri:alert-fill'}></Icon>
        </div>
        <div className={'flex justify-center text-foreground p-5'}>
            <h1 className='text-6xl'>Nothing to see here</h1>
        </div>
        <Blog/>
    </div>
    </div>
    
  )
}

export default NoContent
