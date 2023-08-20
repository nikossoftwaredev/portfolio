import { projects } from "@/data/projects";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full">
      <span className="w-full grid justify-center gap-6">
        <span className="place-self-center w-2/4">
          <SectionTitle title="PORTFOLIO" />
          <p className="font-bold text-xl mt-2">
            Each project is a unique piece of development 🧩
          </p>
        </span>
        {projects.map(
          ({ title, description, githubLink, image, previewLink, tags }) => (
            <ProjectCard
              key="title"
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
