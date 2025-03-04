import AppLink from "@/app/_components/AppLink";
import { TbExternalLink, TbBrandGit } from "react-icons/tb";
import Chip from "@/app/_components/Chip";

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  previewLink = "",
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
    <span className="place-self-center rounded-lg shadow-lg bg-base-100 h-96 max-h-96 p-4">
      <div className="grid grid-cols-3 items-center justify-center h-full gap-5">
        <span className="shadow-lg rounded-lg col-span-2 overflow-hidden h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover w-full transition-transform duration-[7000ms] ease-out transform hover:translate-y-[-70%]"
            alt={title}
            src={image}
          />
        </span>
        <span className="flex flex-col items-center gap-2">
          <h2 className="font-bold text-xl"> {title}</h2>
          <p className="font-medium text-lg">{description}</p>
          <span className="flex gap-4 flex-wrap">
            {tags.map((tag) => (
              <Chip key={tag} title={tag} />
            ))}
          </span>
          <span className="flex gap-4 flex-row">
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
          </span>
        </span>
      </div>
    </span>
  );
};

export default ProjectCard;
