import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardImgProps{
    className: string;
    altImg:string;
    srcImg:string;
    widthImg:number;
    title:string;
    classNameImg:string;
    subtitle:string;
    link:string;
}

const CardImg = (props:CardImgProps) => {
  return (
    <div className={props.className}>
      <Link href={props.link}>
          <Image
            alt={props.altImg}
            src={props.srcImg}
            width={props.widthImg}
            height={100}
            className={props.classNameImg}
          />
          <h3 className="font-aboreto text-3xl text-white mt-4">{props.title}</h3>
          <p className="text-white/70">{props.subtitle}</p>
      </Link>
    </div>
  );
};

export default CardImg;
