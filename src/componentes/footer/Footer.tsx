//import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

const Footer = () => {
  

    let data = new Date().getFullYear()

    return (
        <>
        <div className='h-full bg-blue-900 flex flex-row justify-center items-center'>
        <div className='flex flex-col items-center py-4 font-semibold text-1xl text-blue-500'>
            <p>Farmácia +Saúde - Rebeca Ouriques | Copyright: {data}</p>
            <p> Acesse nosssa redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={28} weight='bold' />
              <InstagramLogo size={28} weight='bold' />
              <FacebookLogo size={28} weight='bold' />
            </div>
        </div>
        </div>
        </>

    )
}

export default Footer