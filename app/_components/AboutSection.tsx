import SectionTitle from "@/app/_components/SectionTitle";

const AboutSection = () => {
  return (
    <section id="about" className="w-full flex flex-col items-center">
      <div className="h-max grid grid-cols-1 gap-8 items-start mt-4">
        <span className="flex flex-col justify-center gap-4 h-full py-1">
          <SectionTitle title="ABOUT ME" />
          <h2 className="font-bold text-3xl">
            A dedicated Front-end Developer based in Athens, Greece 📍
          </h2>
          <p className="text-xl">
            As a Senior Full-Stack Developer, I specialize in Next.js, DApps,
            and modern web technologies. Skilled in TypeScript, React, Node.js,
            and blockchain, I build scalable, high-performance applications with
            a focus on user experience. A collaborative team player, I write
            clean, efficient code to deliver innovative digital solutions.
          </p>
        </span>
      </div>
    </section>
  );
};

export default AboutSection;
