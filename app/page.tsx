import { BUSINESS_NAME } from "@/app/_data/general";
import HeroSection from "@/app/_components/HeroSection";
import { Metadata } from "next";
import AboutSection from "@/app/_components/AboutSection";
import ProjectsSection from "@/app/_components/ProjectsSection";
import ContactSection from "@/app/_components/ContactSection";

const description =
  "Nikos Dimitrakopoulos is a full stack developer based in Athens, Greece. He is a passionate developer with a focus on building scalable and efficient web applications.";

export const metadata: Metadata = {
  title: BUSINESS_NAME,
  description,
  viewport: "width=device-width, initial-scale=1",
  applicationName: BUSINESS_NAME,
  robots: "index, follow",
};

const MainPage = () => {
  return (
    <div className="w-full bg-gradient-to-b from-base-300 flex justify-center">
      <span className="flex flex-col space-y-24 py-2  max-w-2xl">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </span>
    </div>
  );
};

export default MainPage;
