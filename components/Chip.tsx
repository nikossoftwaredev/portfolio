"use client";

const Chip = ({
  title,
  onClick,
}: {
  title: string;
  onClick?: (title: string) => void;
}) => (
  <div
    className={`[word-wrap: break-word] my-1 mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-2xl ${"bg-accent text-textPrimary hover:bg-base-300"} px-[12px] py-0 text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none `}
    onClick={() => onClick && onClick(title)}
  >
    {title}
  </div>
);

export default Chip;
