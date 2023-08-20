"use client";

const Chip = ({
  title,
  onClick,
}: {
  title: string;
  onClick?: (title: string) => void;
}) => (
  <div
    className={` border-neutral-content border-2 flex cursor-pointer items-center justify-between rounded-2xl h-8 bg-base-300 hover:bg-accent px-2 text-sm font-semibold shadow-none transition-[opacity] duration-300 ease-linear `}
    onClick={() => onClick && onClick(title)}
  >
    {title}
  </div>
);

export default Chip;
