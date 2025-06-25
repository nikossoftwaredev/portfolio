import { BUSINESS_NAME } from "@/app/_data/general";
import HeroSection from "@/app/_components/HeroSection";
import { Metadata, Viewport } from "next";
import AboutSection from "@/app/_components/AboutSection";
import ProjectsSection from "@/app/_components/ProjectsSection";
import ContactSection from "@/app/_components/ContactSection";
import { ResumeSection } from "@/app/_components/ResumeSection";
import ChatSection from "@/app/_components/chat/ChatSection";
import RecommendationsSection from "@/app/_components/RecommendationsSection";

const description =
  "Nikos Dimitrakopoulos is a full stack developer based in Athens, Greece. He is a passionate developer with a focus on building scalable and efficient web applications.";

export const metadata: Metadata = {
  title: BUSINESS_NAME,
  description,
  applicationName: BUSINESS_NAME,
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const MainPage = () => {
  return (
    <div className="w-full flex justify-center">
      <span className="flex flex-col space-y-24 px-8 max-w-2xl my-24 pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <ChatSection />
        <RecommendationsSection />
        <ContactSection />
      </span>
    </div>
  );
};

export default MainPage;
