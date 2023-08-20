import { BUSINESS_NAME, LAST_NAME, NAME } from "@/data/general";
import { servicesInfo } from "@/data/services";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const staticKeywords = [
  "πόνος στην πλάτη",
  "βελονισμός ηλιούπολη",
  "πονος στον αυχενα",
  "πονος",
  "πονος ηλιούπολη",
  NAME,
  LAST_NAME,
];

const description =
  "Στο I Ching : balance way παρέχουμε ένα πλήρες εφαρμοσμένο θεραπευτικό πρόγραμμα το οποίο επιδιώκει την ισορροπία του ανθρώπινου οργανισμού.  Εκτός από συγκεκριμένες εσωτερικές και εξωτερικές παθήσεις, η ολιστική προσέγγιση και η κινέζικη ιατρική συμπληρώνουν έναν υγιή και ισορροπημένο τρόπο ζωής.";

const keywords = staticKeywords
  .concat(
    servicesInfo.map((service) => `${service.title}: ${service.subtitle}`)
  )
  .join(", ");

export const metadata: Metadata = {
  title: BUSINESS_NAME,
  description,
  keywords,
  viewport: "width=device-width, initial-scale=1",
  applicationName: BUSINESS_NAME,
  robots: "index, follow",
  openGraph: {
    title: BUSINESS_NAME,
    description,
    images: "https://ichingbalance.gr/images/main_area.webp",
  },
};

const MainPage = () => {
  return (
    <div className="w-full bg-gradient-to-b from-base-300 flex flex-col gap-8">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default MainPage;
