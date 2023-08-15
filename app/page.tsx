import Doctor from "@/components/Doctor";
import SectionTitle from "@/components/SectionTitle";
import ServicesCarousel from "@/components/ServicesCarousel";
import { BUSINESS_NAME, LAST_NAME, NAME } from "@/data/general";
import { servicesInfo } from "@/data/services";
import About from "components/About";
import { Metadata } from "next";

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

const Home = () => {
  return (
    <section>
      <div className="w-full flex flex-col gap-4 pt-4">
        <About />
        <ServicesCarousel />
        <SectionTitle title="Η ΘΕΡΑΠΕΥΤΡΙΑ" />
        <Doctor />
      </div>
    </section>
  );
};

export default Home;
