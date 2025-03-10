import { PROJECTS } from "@/app/_data/projects";
import SectionTitle from "@/app/_components/SectionTitle";
import ProjectCard from "@/app/_components/ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full">
      <span className="w-full grid justify-center gap-6">
        <span className="place-self-start">
          <SectionTitle title="PROJECTS" />
          <p className="font-bold text-xl mt-2">
            Each project is a unique piece of development 🧩
          </p>
        </span>
        <span className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </span>
      </span>
    </section>
  );
};

export default ProjectsSection;
