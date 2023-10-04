import { Icon } from '@iconify/react'
import React from 'react'

function Footer() {
  return (
    <div className={'w-full h-[80px] bg-currentLineBackDrop flex items-center justify-center text-foreground gap-1'}>
        <p className={'text-orange'}>Eduardo Moratón </p>
        <p>- 2023 - You can see the code of this project <a className={'text-cyan'} href='https://github.com/EduardoMoraton/portfolio-react-app'>here</a></p>
    </div>
  )
}

export default Footer
