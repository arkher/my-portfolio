import "@/app/styles/globals.css";
import "./globals.css";
import Head from "next/head";
import { AnimatedText, Container, HireMe, Navbar } from "./components";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import Link from "next/link";
import { LinkArrow } from "./components/Icons/Icons";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={`flex items-center text-dark w-full min-h-screen`}>
        <Container className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-[50%] flex justify-center">
              <Image
                src={profilePic}
                alt="Paulo Gomes"
                className="w-[50%] rounded-full"
              />
            </div>
            <div className="w-[50%] flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Ideas Into Reality With Code."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/Paulo_Gomes_CV.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                  border-2 border-solid border-transparent hover:border-dark"
                  download
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:paulo.rgomes22@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact-me
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="Paulo Gomes" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
