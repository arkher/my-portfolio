import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GithubIcon } from '../Icons/Icons';

interface IProject {
  title: string;
  type: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const Project = ({title, type, img, link, github}: IProject) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto"></Image>
      </Link>

      <div className="w-fullflex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="ml-4 text-lg font-semibold">
            Visit
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Project