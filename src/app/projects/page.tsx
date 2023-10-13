import { AnimatedText, Container, FeaturedProject } from "@/components";
import Head from "next/head";
import React from "react";
import project1 from "../../../public/images/projects/crypto-screener-cover-image.jpg";
import { Project } from "@/components/Project";

const page = () => {
  return (
    <>
      <Head>
        <title>Paulo Gomes | Projects page</title>
        <meta name="description" content="Projects of Paulo Gomes."></meta>
      </Head>
      <main>
        <Container>
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                github="/"
                type="Featured Project"
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                link="/"
                github="/"
                type="Featured Project"
                img={project1}
              />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default page;
