import Card from "components/Card";
import SectionTitle from "components/SectionTitle";
import { servicesInfo } from "data/services";
import TextToHtml from "components/TextToHtml";
import ButtonLink from "components/ButtonLink";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <main className="flex items-center justify-center flex-col">
      <SectionTitle title="ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ" />
      <div className="w-4/5 grid 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {servicesInfo.map((service) => (
          <Card
            key={service.title}
            className="flex flex-col max-w-[400px] overflow-x-hidden w-full hover:scale-105 transition ease-in-out duration-300"
          >
            <figure className="w-full h-[200px] m-h-[200px] relative object-cover">
              <Image
                className="object-cover"
                fill
                src={service.image}
                alt={service.title}
              />
            </figure>
            <main className="p-5 w-full z-10 flex flex-col flex-auto">
              <h1 className="font-extrabold text-2xl text-accent-focus">
                {service.title}
              </h1>
              <h2 className="font-bold text-xl mb-4 text-accent">
                ({service.subtitle})
              </h2>
              <span className="break-words leading-6 mb-10">
                <TextToHtml text={service.description} />
              </span>
              <div className="flex mt-auto">
                <ButtonLink
                  className="ml-auto"
                  href={`/wiki/${service.serviceId}`}
                >
                  ΠΕΡΙΣΣΟΤΕΡΑ
                </ButtonLink>
              </div>
            </main>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;
