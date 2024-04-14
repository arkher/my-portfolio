"use client";
import useThemeSwitcher from "@/app/hooks/useThemeSwitcher";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "../Icons/Icons";
import { Logo } from "../Logo";
import { FC, useCallback, useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";
import MenuButton from "./MenuButton";

const CustomLink = ({ href = "", title = "", className = "" }) => {
  const pathName = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark 
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${pathName === href ? "w-full" : "w-0"}
        dark:bg-light
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenuButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative w-full px-32 py-8 font-medium flex items-center justify-between
     dark:text-light z-10 lg:px-16 md:12 sm:px-8">
      <MenuButton isOpen={isOpen} onClick={handleClickMenuButton} />

      <div
        className={`w-full h-full flex justify-between items-center lg:hidden`}
      >
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          {/* <CustomLink href="/projects" title="Projects" className="mx-4" /> */}
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          {/* <motion.a
          href="https://twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a> */}
          <motion.a
            href="https://github.com/arkher"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light dark:bg-dark"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/paulo-ricardo-gomes/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      <ResponsiveMenu
        open={isOpen}
        mode={mode}
        onChangeMode={() => setMode(mode === "light" ? "dark" : "light")}
        onClickLink={handleClickMenuButton}
      />

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
