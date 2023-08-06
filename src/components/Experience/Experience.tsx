"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "../LiIcon";

interface IDetails {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: IDetails) => {
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
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          className="absolute left-9 top-2 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Intern"
            company="NCA - UFMA"
            companyLink="https://sigaa.ufma.br/sigaa/public/departamento/secao_extra.jsf?lc=es_ES&id=998&extra=208953677"
            time="2018-2020"
            address="São Luís, MA"
            work="Development of intelligent systems based on AI and Machine Learning/Deep Learning to predict
          data related to lawsuits (propensity for lawsuits), so that the company could protect itself and
          improve its service in areas where there was great dissatisfaction with the service. For this, I
          used technologies such as: Python, XGBoost, Pandas, Keras and Tensorflow."
          />
          <Details
            position="Software engineer"
            company="Pulse, Grupo Mateus"
            companyLink="https://www.grupomateus.com.br/inovacao/"
            time="2020-2022"
            address="São Luís, MA"
            work="Developed and proposed efficient solutions for a scalable mobile sales and marketing
            application in React native that surpassed the mark of 1 million users.
            I took the lead in the development of a design system for the company's mobile applications,
            along with robust documentation using the technologies: React Native, typescript, testing
            library and storybook., facilitating the development of other company applications.
            I supported microservices in NodeJs.
            I developed internal web projects to help the company manage contracts with its suppliers,
            through web solutions in React, exponentially increasing the efficiency in the management
            processes of these contracts."
          />
          <Details
            position="Software engineer"
            company="Blip"
            companyLink="https://www.blip.ai/"
            time="2022-2023"
            address="Belo Horizonte, MG"
            work="I developed several modules in a micro-frontend architecture using React and Typescript,
            leading a development team and leading the migration of some modules to a new structure.
            Promoted the personal development of other team members by transferring knowledge, clean
            code and good practices through talks and code reviews."
          />
          <Details
            position="Software engineer"
            company="Juvo"
            companyLink="http://juvocredito.com.br/"
            time="2023-current"
            address="São Paulo, SP"
            work="I developed new functionalities in a Backoffice Project using React, adding value to the company
            and facilitating the demand of the operational sector.
            I also eveloped new features for the company's official applications, which manage loans and users,
            using React, Typescript and Flutter."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
