import BubbleIcon from "@/components/BubbleIcon";
import SectionTitle from "@/components/SectionTitle";
import {
  TbBrandJavascript,
  TbBrandReact,
  TbBrandDocker,
  TbBrandAndroid,
  TbBrandTypescript,
  TbBrandGit,
  TbBrandCss3,
  TbBrandDeno,
  TbBrandNextjs,
  TbBrandMongodb,
  TbBrandMysql,
} from "react-icons/tb";

export const techStackInfo = [
  {
    name: "TbBrandReact",
    icon: <TbBrandReact size={50} />,
  },
  { name: "Javascript", icon: <TbBrandJavascript size={50} /> },
  {
    name: "Docker",
    icon: <TbBrandDocker size={50} />,
  },
  { name: "Android", icon: <TbBrandAndroid size={50} /> },
  { name: "Typescript", icon: <TbBrandTypescript size={50} /> },
  { name: "GitBranch", icon: <TbBrandGit size={50} /> },
  { name: "Css3", icon: <TbBrandCss3 size={50} /> },
  { name: "Deno", icon: <TbBrandDeno size={50} /> },
  { name: "Nextjs", icon: <TbBrandNextjs size={50} /> },
  { name: "Mongodb", icon: <TbBrandMongodb size={50} /> },
  { name: "Mysql", icon: <TbBrandMysql size={50} /> },
];

const TechStack = () => (
  <section className="flex items-center justify-center flex-col gap-5">
    <p className="text-3xl font-bold"></p>
    <SectionTitle title="TECH STACK" />
    <div className="flex items-center justify-center gap-4">
      {techStackInfo.map((ti) => {
        return <BubbleIcon key={ti.name} icon={ti.icon} name={ti.name} />;
      })}
    </div>
  </section>
);

export default TechStack;
