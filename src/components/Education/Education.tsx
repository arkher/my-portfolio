"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "../LiIcon";

interface IDetails {
  type: string;
  time: string;
  place: string;
  info: string;
}

const Details = ({ type, time, place, info }: IDetails) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon />
      <motion.div
        initial={{
          y: 50,
        }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          className="absolute left-9 top-2 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor in Computer Science"
            time="2016-2021"
            place="Federal University of Maranhão - UFMA"
            info="Relevant courses including Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
          Intelligence."
          />
          <Details
            type="Technician in IT"
            time="2013-2015"
            place="Federal Institute of Maranhão - IFMA"
            info="Introduction to Programming, Algorithms and Data Structures, such as Design Patterns."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
