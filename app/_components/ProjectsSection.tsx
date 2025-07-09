import { PROJECTS } from "@/app/_data/projects";
import SectionTitle from "@/app/_components/SectionTitle";
import ProjectCard from "@/app/_components/ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <SectionTitle title="PROJECTS" />
          <p className="font-bold text-2xl mt-4 text-base-content/80">
            Each project is a unique piece of development 🧩
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
