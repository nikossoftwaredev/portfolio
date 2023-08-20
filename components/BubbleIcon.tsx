const BubbleIcon = ({
  icon,
  name,
}: {
  name: string;
  icon: React.ReactNode;
}) => (
  <span
    data-tip={name}
    className="tooltip bg-base-100 rounded-full p-4 shadow-xl hover:scale-105 cursor-pointer ease-in-out duration-300"
  >
    {icon}
  </span>
);

export default BubbleIcon;
