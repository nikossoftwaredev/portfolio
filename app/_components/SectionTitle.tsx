import { twMerge } from "tailwind-merge";

const SectionTitle = ({
  title = "",
  className = "",
  position = "center",
}: {
  title: string;
  position?: "start" | "center" | "end";
  className?: string;
}): JSX.Element => {
  return (
    <h2 className={twMerge(`text-accent font-bold text-xl`, className)}>
      {title}
    </h2>
  );
};

export default SectionTitle;
