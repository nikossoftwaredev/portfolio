import AppLink from "@/app/_components/AppLink";
import Chip from "@/app/_components/Chip";
import { Project } from "@/app/_data/projects";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  previewLink = "",
  tags,
  chipColor,
}: Project) => (
  <div className="card bg-base-100 shadow-2xl hover:bg-base-200 transition-all duration-300 overflow-hidden group">
    <div className="relative w-full aspect-video overflow-hidden bg-base-200">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="object-cover w-full transition-transform hover:translate-y-[-70%]"
        style={{ transition: "transform 5s ease-out" }}
        alt={title}
        src={image}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Chip key={tag} title={tag} color={chipColor} />
          ))}
        </div>
      </div>
    </div>
    <div className="card-body p-8 bg-gradient-to-br from-gray-900 via-gray-900/95 to-green-950/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-900/20 to-emerald-950/30"></div>
      <div className="relative z-10">
        <h3 className="card-title text-2xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-base-content/80 text-lg leading-relaxed mb-6">{description}</p>
        <div className="card-actions justify-between items-center mt-auto">
          <div className="flex gap-4">
          {githubLink && (
            <AppLink 
              href={githubLink}
              className="btn btn-outline btn-primary btn-sm gap-2"
            >
              <FaGithub size={18} />
              Code
            </AppLink>
          )}
          {previewLink && (
            <AppLink 
              href={previewLink} 
              target="_blank"
              className="btn btn-primary btn-sm gap-2"
            >
              <FaGlobe size={16} />
              Website
            </AppLink>
          )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
