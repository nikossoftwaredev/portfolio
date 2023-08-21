const BubbleIcon = ({
  icon,
  name,
  hasAnimation = true,
}: {
  name: string;
  icon: React.ReactNode;
  hasAnimation?: boolean;
}) => (
  <span
    data-tip={name}
    className={`tooltip bg-base-100 rounded-full p-4 shadow-xl cursor-pointer ${
      hasAnimation ? "hover:scale-105  ease-in-out duration-300" : ""
    }`}
  >
    {icon}
  </span>
);

export default BubbleIcon;
