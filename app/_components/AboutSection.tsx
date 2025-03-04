import SectionTitle from "@/app/_components/SectionTitle";

const AboutSection = () => {
  return (
    <section id="about" className="w-full flex flex-col items-center">
      <div className="h-max grid grid-cols-2 gap-8 items-start mt-4">
        <img
          className="rounded-lg h-full object-cover"
          alt="Linked in screenshot"
          src="images/about.png"
        />
        <span className="flex flex-col justify-center gap-4 h-full py-1">
          <SectionTitle title="ABOUT ME" />
          <h2 className="font-bold text-3xl">
            A dedicated Front-end Developer based in Athens, Greece 📍
          </h2>
          <p className="text-xl">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </span>
      </div>
    </section>
  );
};

export default AboutSection;
