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
      <main className="flex w-full flex-col items-center justify-center">
        <Container className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 ">
                Biography
              </h2>
              <p className="font-medium ">
                Hi, I am Paulo Gomes, a web developer and Software engineer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
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
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 
              -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Paulo Gomes"
                className="w-full h-23 rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              {/* <div className="flex flex-col flex-1 items-end">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="font-medium text-xl capitalize text-dark/75">
                  projects completed
                </h2>
              </div> */}
              <div className="flex flex-col flex-1 items-end">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="font-medium text-xl capitalize text-dark/75">
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
