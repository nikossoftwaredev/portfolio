import AppLink from "@/app/_components/AppLink";
import { TbExternalLink, TbBrandGit } from "react-icons/tb";
import Chip from "@/app/_components/Chip";
import { Project } from "@/app/_data/projects";

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
      <img className="object-cover w-full h-full" alt={title} src={image} />
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
      <div className="card-actions justify-end">
        <AppLink href={githubLink}>
          Code
          <TbBrandGit size={20} />
        </AppLink>
        {previewLink && (
          <AppLink href={previewLink}>
            Demo
            <TbExternalLink size={20} />
          </AppLink>
        )}
      </div>
    </div>
  </span>
);

export default ProjectCard;
