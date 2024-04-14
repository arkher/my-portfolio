import { FC, useCallback } from "react";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "../Icons/Icons";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface CustomMobileLinkProps {
  href?: string;
  title?: string;
  className?: string;
  toggle?: () => void;
}
export const CustomMobileLink: FC<CustomMobileLinkProps> = ({
  href = "",
  title = "",
  className = "",
  toggle,
}) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = useCallback(() => {
    toggle?.();
    router.push(href);
  }, [href, router, toggle]);

  return (
    <button onClick={handleClick} className={
      `${className} relative group text-light 
      dark:text-dark my-2`}>
      {title}
      <span
        className={`h-[1px] inline-block
        w-0 bg-light 
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${pathName === href ? "w-full" : "w-0"}
        dark:bg-dark
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

interface ResponsiveNavbarProps {
  mode: string;
  onChangeMode: () => void;
  onClickLink: () => void;
  open: boolean;
}
export const ResponsiveMenu: FC<ResponsiveNavbarProps> = ({
  open,
  mode,
  onChangeMode,
  onClickLink,
}) => {
  return (
    open && (
      <motion.div
      initial={{scale: 0, opacity: 0, x: '-50%', y: '-50%'}}
      animate={{scale: 1, opacity: 1}}
        className={`min-w-[70vw] z-30 flex flex-col 
      justify-between items-center fixed 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md
      py-32
    `}
      >
        <nav className="flex items-center flex-col justify-center">
          <CustomMobileLink
            toggle={onClickLink}
            href="/"
            title="Home"
            className=""
          />
          <CustomMobileLink
            toggle={onClickLink}
            href="/about"
            title="About"
            className=""
          />
          <CustomMobileLink
            toggle={onClickLink}
            href="/articles"
            title="Articles"
            className=""
          />
        </nav>
        <nav className="flex items-center justify-center flex-wrap mt-2">
          <motion.a
            href="https://github.com/arkher"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/paulo-ricardo-gomes/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={onChangeMode}
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
      </motion.div>
    )
  );
};
