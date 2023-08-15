import Card from "@/components/Card";
import CarouseButtons from "@/components/CarouselButtons";
import SectionTitle from "@/components/SectionTitle";
import { servicesInfo } from "@/data/services";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const ServicesCarousel = () => {
  return (
    <span>
      <SectionTitle title="ΟΛΙΣΤΙΚΕΣ ΘΕΡΑΠΕΙΕΣ" />
      <section className="w-full flex flex-col items-center justify-center">
        <Card className="relative xl:w-2/4 md:w-3/4 max-w-full p-5">
          <CarouseButtons scrollableDivId="scrollable-div" />
          <div
            id="scrollable-div"
            className="flex overflow-x-auto gap-4 justify-between p-2"
          >
            {servicesInfo.map((service) => (
              <Link
                href={`/wiki/${service.serviceId}`}
                key={service.serviceId}
                className="overflow-y-hidden rounded-lg shadow-xl relative h-[300px] w-[250px]  flex flex-col flex-shrink-0 brightness-100 hover:brightness-75 transition ease-in-out duration-300"
              >
                <img
                  src={service.image}
                  className="rounded-t-lg object-cover h-4/5 w-full"
                  alt={service.title}
                  loading="lazy"
                />
                <div className="rounded-b-lg grow bg-white flex flex-row justify-center items-center p-2 font-bold text-2xl text-accent-focus gap-2">
                  <h2 className="text-center ">{service.title}</h2>
                  <MdArrowForward />
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </section>
    </span>
  );
};

export default ServicesCarousel;
