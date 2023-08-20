import AppLink from "@/components/AppLink";
import TechStack from "@/components/TechStack";
import { START_YEAR } from "@/data/general";
import dayjs from "dayjs";
import { BsGithub, BsLinkedin, BsShieldCheck } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex flex-col items-center justify-center"
    >
      <div className="flex gap-5 items-center justify-center flex-grow">
        <span className="gap-5 flex flex-col item-center">
          <h1 className="text-6xl font-bold flex items-center gap-2">
            Full Stack Developer <BsShieldCheck />
          </h1>
          <p className="text-xl">
            Hi, I am Nikos Dimitrakopoulos. <br />A passionate Full Stack
            Developer with{" "}
            <b>{dayjs().subtract(START_YEAR, "y").format("YY")}&nbsp;</b>
            years of
            <br />
            professional experience, based in Athens, Greece. 📍
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
        <span>
          <img
            src="images/portrait.jpg"
            className="animate-morphing w-[300px] brightness-90 overflow-hidden border-yellow-200 "
          ></img>
        </span>
      </div>

      <span className="mt-auto mb-4">
        <TechStack />
      </span>
    </section>
  );
};

export default HeroSection;
