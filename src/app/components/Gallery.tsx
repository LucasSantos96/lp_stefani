"use client";
import React from "react";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardImg from "./CardImg";

const Gallery = () => {
  return (
    <section id="gallery" className="px-8 mt-20 lg:mt-30">
      <h3 className="font-aboreto text-4xl text-white">Portifólio</h3>
      <p className="font-montserrat text-white/70 mt-4">
        Confira alguns dos meus trabalhos recentes
      </p>
      <Carousel className="mx-8 pt-20 pb-10 text-black">
        <CarouselContent>
          <CarouselItem className=" lg:basis-1/3">
            <CardImg
              link={"/marriage"}
              className="rounded-2xl cursor-pointer duration-300 hover:scale-101 hover:opacity-70"
              altImg="Fotos de casamento"
              srcImg={"/img1.jpg"}
              widthImg={500}
              classNameImg="rounded-2xl "
              title="Casamentos"
              subtitle="Momentos inesquecíveis do seu grande dia."
            />
          </CarouselItem>
          <CarouselItem className=" lg:basis-1/3">
            <CardImg
              link={"/birthday"}
              className="rounded-2xl cursor-pointer duration-300 hover:scale-101 hover:opacity-70"
              altImg="Fotos de aniversário"
              srcImg={"/img-aniversario.jpg"}
              widthImg={500}
              classNameImg="rounded-2xl "
              title="Aniversários"
              subtitle="Momentos inesquecíveis do seu grande dia."
            />
          </CarouselItem>
          <CarouselItem className=" lg:basis-1/3">
             <CardImg
                link={'/portraits'}
                className='rounded-2xl cursor-pointer duration-300 hover:scale-101 hover:opacity-70' 
                altImg='Fotos de retratos'
                srcImg={'/pexels-leah-newhouse-50725-5091121.jpg'}
                widthImg={500}
                classNameImg='rounded-2xl '
                title='Retratos'
                subtitle='Sessões personalizadas que capturam sua essência única.'
                
                />
          </CarouselItem>
          <CarouselItem className=" lg:basis-1/3">
             <CardImg
                link={''}
                className='rounded-2xl cursor-pointer duration-300 hover:scale-101 hover:opacity-70' 
                altImg='Fotos de casamento'
                srcImg={'/img1.jpg'}
                widthImg={500}
                classNameImg='rounded-2xl '
                title='Casamentos'
                subtitle='Momentos inesquecíveis do seu grande dia.'
                
                />
          </CarouselItem>
          <CarouselItem className=" lg:basis-1/3">
             <CardImg
                link={''}
                className='rounded-2xl cursor-pointer duration-300 hover:scale-101 hover:opacity-70' 
                altImg='Fotos de casamento'
                srcImg={'/img1.jpg'}
                widthImg={500}
                classNameImg='rounded-2xl '
                title='Casamentos'
                subtitle='Momentos inesquecíveis do seu grande dia.'
                
                />
          </CarouselItem>
          <CarouselItem className=" lg:basis-1/3">
             <CardImg
                link={''}
                className='rounded-2xl cursor-pointer duration-300 hover:scale-101 hover:opacity-70' 
                altImg='Fotos de casamento'
                srcImg={'/img1.jpg'}
                widthImg={500}
                classNameImg='rounded-2xl '
                title='Casamentos'
                subtitle='Momentos inesquecíveis do seu grande dia.'
                
                />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
     
    </section>
  );
};

export default Gallery;
