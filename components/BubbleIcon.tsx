const BubbleIcon = ({ icon }: { name: string; icon: React.ReactNode }) => (
  <span className="bg-base-100 rounded-full p-4 shadow-xl hover:scale-105 cursor-pointer ease-in-out duration-300">
    {icon}
  </span>
);

export default BubbleIcon;
