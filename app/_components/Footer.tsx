import AppLink from "@/app/_components/AppLink";
import dayjs from "dayjs";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-base-300 flex items-center flex-col">
      <span className="w-3/4 flex gap-4 items-start justify-start py-10">
        <p className="font-bold text-xl">
          Copyright © {dayjs().format("YYYY")}. All rights are reserved
        </p>
        <AppLink
          href="https://www.linkedin.com/in/nikosdim97/"
          className="ml-auto"
        >
          <BsLinkedin size={30} />
        </AppLink>
        <AppLink href="#contact">
          <BsGithub size={30} />
        </AppLink>
      </span>
    </footer>
  );
};

export default Footer;
