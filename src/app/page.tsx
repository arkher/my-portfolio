import "@/app/styles/globals.css";
import "./globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import { AnimatedText, Container, Navbar } from "./components";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";

const inter = Montserrat({ subsets: ["latin"], variable: "--font-inter" });

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
              <p>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
