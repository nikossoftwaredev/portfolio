import AppLink from "@/components/AppLink";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  previewLink,
}: {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  previewLink: string;
}) => {
  return (
    <span className="rounded-md shadow-lg bg-base-100 w-2/4 px-4 py-2">
      <div className="flex items-center justify-center">
        <span>
          <h2 className="font-bold"> {title}</h2>
          <p>{description}</p>
          <span className="flex gap-4 flex-row">
            <AppLink href="https://www.linkedin.com/in/nikosdim97/">
              <BsLinkedin size={30} />
            </AppLink>
            <AppLink href="#contact">
              <BsGithub size={30} />
            </AppLink>
          </span>
        </span>
        <span>
          <img
            className="h-96 object-contain"
            src="https://stefantopalovicdev.vercel.app/static/media/ecom.f10b3cdd799be85c19da.webp"
          />
        </span>
      </div>
    </span>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full h-screen flex items-center justify-center"
    >
      <ProjectCard
        title="RAOUF ECOMMERCE"
        githubLink=""
        previewLink=""
        image="https://stefantopalovicdev.vercel.app/static/media/ecom.f10b3cdd799be85c19da.webp"
        description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
      />
    </section>
  );
};

export default ProjectsSection;
