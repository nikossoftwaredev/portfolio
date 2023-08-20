import BubbleIcon from "@/components/BubbleIcon";
import SectionTitle from "@/components/SectionTitle";
import { FaMapMarker, FaMailBulk } from "react-icons/fa";

const contactInfo = [
  {
    title: "Location",
    description: "Athens, Greece",
    icon: <FaMapMarker size={40} />,
  },
  {
    title: "Mail",
    description: "nikossoftwaredev@gmail.com",
    icon: <FaMailBulk size={40} />,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="w-full flex flex-col items-center">
      <span className="flex flex-col justify-center gap-4 h-full py-1 w-2/4">
        <SectionTitle title="CONTACT" />
        <h2 className="font-bold text-3xl">Don't shy! Hit me up! 👇</h2>
        <span className="flex justify-start items-start gap-4">
          {contactInfo.map((ci) => (
            <span
              key={ci.title}
              className="flex gap-4 items-center justify-start"
            >
              <BubbleIcon icon={ci.icon} name={ci.title} />
              <span key={ci.title}>
                <p className="font-bold text-lg"> {ci.title}</p>
                <p className="text-lg"> {ci.description}</p>
              </span>
            </span>
          ))}
        </span>
      </span>
    </section>
  );
};

export default ContactSection;
