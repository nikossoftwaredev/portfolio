import AppLink from "@/app/_components/AppLink";
import BubbleIcon from "@/app/_components/BubbleIcon";
import SectionTitle from "@/app/_components/SectionTitle";
import { TbBrandLinkedin, TbBrandGmail } from "react-icons/tb";

const contactInfo = [
  {
    title: "LinkedIn",
    description: "@nikosdim97",
    href: "https://www.linkedin.com/in/nikosdim97/",
    icon: <TbBrandLinkedin size={40} />,
  },
  {
    title: "Mail",
    description: "nikossoftwaredev@gmail.com",
    href: "mailto:nikossoftwaredev@gmail.com",
    icon: <TbBrandGmail size={40} />,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="w-full flex flex-col items-start">
      <span className="flex flex-col justify-center gap-4 h-full py-1">
        <SectionTitle title="CONTACT" />
        <h2 className="font-bold text-3xl">Don&apos;t be shy! Hit me up! 👇</h2>
        <span className="flex flex-wrap justify-start items-start gap-4">
          {contactInfo.map((ci) => (
            <AppLink
              key={ci.title}
              href={ci.href}
              target="_blank"
              className="flex gap-4 items-center justify-start"
            >
              <BubbleIcon icon={ci.icon} name={ci.title} hasAnimation={false} />
              <span key={ci.title}>
                <p className="text-lg"> {ci.title}</p>
                <p className="text-lg"> {ci.description}</p>
              </span>
            </AppLink>
          ))}
        </span>
      </span>
    </section>
  );
};

export default ContactSection;
