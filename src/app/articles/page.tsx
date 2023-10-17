import { AnimatedText, Container } from "@/components";
import { FeaturedArticle } from "@/components/FeaturedArticle";
import Head from "next/head";
import React from "react";
import article1 from "../../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../../public/images/articles/create loading screen in react js.jpg";

const page = () => {
  return (
    <>
      <Head>
        <title>Paulo Gomes | Articles page</title>
        <meta name="description" content="Articles of Paulo Gomes."></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Container className="pt-16">
          <AnimatedText text="Words Can Change The World! " className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article2}
            />
          </ul>
        </Container>
      </main>
    </>
  );
};

export default page;
