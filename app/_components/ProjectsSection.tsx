import { PROJECTS } from "@/app/_data/projects";
import SectionTitle from "@/app/_components/SectionTitle";
import ProjectCard from "@/app/_components/ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full">
      <span className="w-full grid justify-center gap-6">
        <span className="place-self-start">
          <SectionTitle title="PORTFOLIO" />
          <p className="font-bold text-xl mt-2">
            Each project is a unique piece of development 🧩
          </p>
        </span>
        {PROJECTS.map(
          ({ title, description, githubLink, image, previewLink, tags }) => (
            <ProjectCard
              key={title}
              title={title}
              githubLink={githubLink}
              previewLink={previewLink}
              tags={tags}
              image={image}
              description={description}
            />
          )
        )}
      </span>
    </section>
  );
};

export default ProjectsSection;
