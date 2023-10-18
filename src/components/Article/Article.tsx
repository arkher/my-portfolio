"use client";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface IArticle {
  img?: StaticImageData;
  title: string;
  date: string;
  link: string;
}

const Article = ({ img, title, date, link }: IArticle) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between 
                    bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
      initial={{ y: 100 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl font-semibold hover:underline">
          {title}
        </h2>
      </Link>
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

export default Article;
