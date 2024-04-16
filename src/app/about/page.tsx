import { AnimatedText, Container, Education } from "@/components";
import { AnimatedNumbers } from "@/components/AnimatedNumbers";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../../public/images/profile/developer-pic-2.jpg";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";

const page = () => {
  return (
    <>
      <Head>
        <title>Paulo Gomes | About Page</title>
        <meta
          name="description"
          content="Paulo Gomes - Software developer focused on frontend engineering. "
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Container className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 md:col-span-8 md:mt-8 flex flex-col items-start justify-start xl:col-span-4 md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium ">
                Hi, I am Paulo Gomes, a web developer and Software engineer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 5 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients ideas and perspectives to life.
              </p>
              <p className="font-medium my-4">
                I believe that developing applications is about solving problems
                and creating intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium ">
                Whether I am working on a website, mobile app, or other digital
                product, I bring my commitment to development excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 xl:col-span-4 md:col-span-8 md:order-1 relative h-max rounded-2xl border-2 border-solid border-dark
             bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 
              -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Paulo Gomes"
                className="w-full h-23 rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 xl:col-span-8 md:order-3 flex flex-col items-end justify-between xl:flex-row xl:items-center">
              <div className="flex flex-col flex-1 items-end xl:items-center xl:mt-4">
                <span className="inline-block text-8xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="font-medium text-2xl capitalize text-dark/75 dark:text-light/75 mt-4">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Container>
      </main>
    </>
  );
};

export default page;
