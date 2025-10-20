import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'

const page = () => {
  return (
    <section className='px-8 flex flex-col justify-center items-center'>
        <div>
            <Link href={'/#gallery'}><button className='bg-white/80 p-2 rounded-2xl flex gap-2 items-center font-semibold cursor-pointer mt-20 over:opacity-60 hover:scale-105 duration-300 w-fit'><FiArrowLeft/> Voltar</button></Link>
            <h2 className='font-aboreto text-4xl text-white mt-8 mb-4'>Retratos</h2>
            <p className='text-white/70 lg:w-[600px]'>Sessões personalizadas que capturam sua essência única. Seja para uso profissional, artístico ou pessoal, cada retrato é cuidadosamente planejado e executado.</p>
        </div>

        <div className='mt-20 mb-10 lg:mt-40 lg:mb-20  flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:justify-center lg:items-center'>
            <Image
            alt='img1'
            src={'/pexels-pixabay-415829.jpg'}
            width={400}
            height={100}
            className='rounded-2xl hover:opacity-60 hover:scale-105 duration-300'
            />
              <Image
            alt='img2'
            src={'/pexels-noellegracephotos-906052.jpg'}
            width={400}
            height={100}
            className='rounded-2xl hover:opacity-60 hover:scale-105 duration-300'
            />
               <Image
            alt='img1'
            src={'/pexels-bertellifotografia-573299.jpg'}
            width={400}
            height={100}
            className='rounded-2xl hover:opacity-60 hover:scale-105 duration-300'
            />
              <Image
            alt='img2'
            src={'/pexels-olly-839011.jpg'}
            width={400}
            height={100}
            className='rounded-2xl hover:opacity-60 hover:scale-105 duration-300'
            />
             <Image
            alt='img2'
            src={'/pexels-gabi-brasiliano-515209300-32225482.jpg'}
            width={400}
            height={100}
            className='rounded-2xl hover:opacity-60 hover:scale-105 duration-300'
            />
             <Image
            alt='img2'
            src={'/pexels-pixabay-247322.jpg'}
            width={400}
            height={100}
            className='rounded-2xl hover:opacity-60 hover:scale-105 duration-300'
            />
           
        </div>
          <Link href={'https://wa.me/219999999'} target="_blank" className=''>
        <button className="bg-white/70 text-black/80 font-montserrat font-semibold p-2 rounded cursor-pointer shadow-2xl hover:scale-105 duration-200 hover:bg-gray-400 w-fit mb-8 ">
          Solicitar Orçamento
        </button>
      </Link>
    </section>
  )
}

export default page