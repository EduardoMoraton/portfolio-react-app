import React from 'react'
import { Icon } from '@iconify/react'

function NoContent({skill}) {
  return (
    <div className={'flex flex-col w-full h-[150px] bg-currentLine rounded-lg my-10'}>
        <div className={'flex justify-center items-center text-yellow text-6xl'}>
            <Icon icon={'ri:alert-fill'}></Icon>
        </div>
        <div className={'flex justify-center text-foreground'}>
            <h1 className='text-6xl'>Nothing to see here</h1>
        </div>
    </div>
  )
}

export default NoContent
