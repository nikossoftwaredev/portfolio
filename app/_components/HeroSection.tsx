import AppLink from "@/app/_components/AppLink";
import TechStack from "@/app/_components/TechStack";
import { START_YEAR } from "@/app/_data/general";
import dayjs from "dayjs";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section id="home" className="w-full min-h-screen grid">
      <div className="flex flex-col-reverse md:flex-row gap-5 items-center justify-center flex-grow">
        <span className="gap-5 flex flex-col">
          <span className="text-4xl font-bold flex items-center gap-2">
            Full Stack Developer
          </span>
          <p className="text-xl">
            Hi, I&apos;m Nikos Dimitrakopoulos, a passionate Full-Stack
            Developer with{" "}
            <b>{dayjs().subtract(START_YEAR, "years").format("YY")}</b> years of
            experience.
            <br />
            Based in Athens, Greece. 📍
          </p>
          <span className="flex gap-4">
            <AppLink href="https://www.linkedin.com/in/nikosdim97/">
              <BsLinkedin size={40} />
            </AppLink>
            <AppLink href="#contact">
              <BsGithub size={40} />
            </AppLink>
          </span>
        </span>
        <img
          src="images/portrait.jpg"
          className="animate-morphing w-[300px] brightness-90 overflow-hidden border-primary-content border-2"
        />
      </div>
      <TechStack />
    </section>
  );
};

export default HeroSection;
