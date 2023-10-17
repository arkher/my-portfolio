import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface IFeaturedArticle {
  img: StaticImageData;
  title: string;
  time: string;
  summary: string;
  link: string;
}

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: IFeaturedArticle) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto"></Image>
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

export default FeaturedArticle;
