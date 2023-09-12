import { Icon } from '@iconify/react'
import React from 'react'

function Chip({skill}) {
  return (
    <>
      <div className={'bg-comment p-2 m-1 flex justify-center cursor-pointer rounded-xl shadow-md hover:text-pink transition .3'}>
        <div className={'flex items-center gap-2'}>
        <div className={'text-2xl'}>{skill.skill}</div>
        <div className={'text-m'}>{skill.name}</div>
        </div>

        
      </div>
    </>
  )
}

export default Chip
