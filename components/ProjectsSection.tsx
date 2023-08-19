import AppLink from "@/components/AppLink";
import { BsLinkedin } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import Chip from "@/components/Chip";

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  previewLink,
  tags,
}: {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  previewLink: string;
  tags: string[];
}) => {
  return (
    <span className="place-self-center rounded-lg shadow-lg bg-base-100 w-2/4 h-96 max-h-96 p-4">
      <div className="grid grid-cols-3 items-center justify-center h-full gap-5">
        <span className="shadow-lg rounded-lg col-span-2 overflow-hidden h-full">
          <img
            className="object-contain w-full"
            alt={title}
            src="https://stefantopalovicdev.vercel.app/static/media/ecom.f10b3cdd799be85c19da.webp"
          />
        </span>
        <span className="flex flex-col items-center gap-2">
          <h2 className="font-bold"> {title}</h2>
          <p>{description}</p>
          <span className="flex gap-4">
            {tags.map((tag) => (
              <Chip key={tag} title={tag} />
            ))}
          </span>
          <span className="flex gap-4 flex-row">
            <AppLink href="https://www.linkedin.com/in/nikosdim97/">
              Code
              <BsLinkedin size={20} />
            </AppLink>
            <AppLink href="#contact">
              Demo
              <BiLinkExternal size={20} />
            </AppLink>
          </span>
        </span>
      </div>
    </span>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full h-screen grid justify-center gap-10"
    >
      <ProjectCard
        title="RAOUF ECOMMERCE 🛒"
        githubLink=""
        previewLink=""
        tags={["React", "Next 13"]}
        image="https://stefantopalovicdev.vercel.app/static/media/ecom.f10b3cdd799be85c19da.webp"
        description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
      />
    </section>
  );
};

export default ProjectsSection;
