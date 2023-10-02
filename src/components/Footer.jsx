import { Icon } from '@iconify/react'
import React from 'react'

function Footer() {
  return (
    <div className={'w-full h-[80px] bg-currentLineBackDrop flex items-center justify-center text-foreground'}>
        <p>Eduardo Moraton - 2023 - </p>
        <p>You can see this project <a className={'text-cyan'} href=''>here</a></p>
    </div>
  )
}

export default Footer
