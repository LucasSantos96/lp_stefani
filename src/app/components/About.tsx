import React from 'react'

import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='px-8 mt-20 lg:px-30 lg:mt-30'>
        <div className='flex flex-col items-center lg:flex-row lg:justify-between '>
            <Image
            alt='Fotografa'
            src={'/stefani2.png'}
            width={300}
            height={100}
            className='mb-10 lg:w-[350px]'
            />
        <div className='lg:w-[500px]'>
            <h2 className='font-aboreto text-3xl text-white font-semibold lg:text-5xl'>Sobre mim</h2>
            <p className='font-montserrat my-4 text-white/80'>A fotografia é minha forma de contar histórias.
            Busco capturar emoções reais e transformar momentos simples em memórias únicas.
            Cada clique é um retrato da alma, feito com luz, sensibilidade e propósito.</p>
            </div>
        </div>

    </section>
  )
}

export default About