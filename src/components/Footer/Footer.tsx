import React from "react";
import { Container } from "../Container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg"
    >
      <Container className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Built with <span className="text-primary text-2xl px-1">&#9825;</span>{" "}
          By&nbsp;
          <Link
            href="mailto:paulo.rgomes22@gmail.com"
            target="_blank"
            className="underline underline-offset-2"
          >
            Paulo Gomes
          </Link>
        </div>
        <Link
          href="mailto:paulo.rgomes22@gmail.com"
          target="_blank"
          className="underline underline-offset-2"
        >
          Say hello
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
