import React from 'react'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <section className='px-8 my-30'>
      <h3 className='font-aboreto text-white text-4xl'>Entre em Contato</h3>
      <p className='text-white/70 '>Vamos conversar sobre como posso tornar seus momentos ainda mais especiais
    </p>
    <ul className='mt-8 flex flex-col gap-4'> 
      <a href="#" target='_blank'>
        <li className='flex text-white/70 text-sm items-center gap-2'><MdEmail color='#fff'/> email@gmail.com</li>
      </a>

      <a href="https://wa.me/219999999" target='_blank'>
        <li className='flex text-white/70 text-sm items-center gap-2'><BsWhatsapp color='#fff'/> (21)99999-9999</li>
      </a>

      <a href="https://www.instagram.com/stefani_cedrofotografia/" target='_blank'>
        <li className='flex text-white/70 text-sm items-center gap-2'><BsInstagram color='#fff'/>stefani_cedrofotografia</li>
      </a>
    </ul>
    </section>
  )
}

export default Contact