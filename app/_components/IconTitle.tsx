const IconTitle = ({
  title,
  icon,
  className = "",
  position = "center",
}: {
  title: string;
  icon: JSX.Element;
  className?: string;
  position?: "start" | "center" | "end";
}): JSX.Element => {
  return (
    <div
      className={`w-full flex items-center justify-${position} my-6 ${className} text-bg-primary-content`}
    >
      {icon}
      <h1 className="font-black text-2xl  text-center mx-3">{title}</h1>
    </div>
  );
};

export default IconTitle;
