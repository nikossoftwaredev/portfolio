import AppLink from "@/app/_components/AppLink";
import Chip from "@/app/_components/Chip";
import { Project } from "@/app/_data/projects";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  previewLink = "",
  tags,
  chipColor,
}: Project) => (
  <span className="card bg-base-100 relative shadow-xl">
    <div className="w-full h-48 overflow-hidden rounded-t-lg relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="object-cover w-full transition-transform duration-1000 ease-out transform hover:translate-y-[-70%]"
        alt={title}
        src={image}
      />
      <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <span className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Chip key={tag} title={tag} color={chipColor} />
          ))}
        </span>
      </span>
    </div>
    <div className="card-body">
      <div className="card-title text-center w-full">{title}</div>
      <p className="font-medium text-lg">{description}</p>
      <div className="card-actions justify-end gap-4">
        <AppLink href={githubLink}>
          Code
          <FaGithub size={20} />
        </AppLink>
        {previewLink && (
          <AppLink href={previewLink}>
            Demo
            <FaLink size={20} />
          </AppLink>
        )}
      </div>
    </div>
  </span>
);

export default ProjectCard;
