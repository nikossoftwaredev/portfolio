const CurriculumLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='w-full'>
      <section className='p-4 border-t-0'>{children}</section>
    </div>
  );
};

export default CurriculumLayout;
