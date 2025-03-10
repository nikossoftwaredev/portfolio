import AppLink from "@/app/_components/AppLink";
import BubbleIcon from "@/app/_components/BubbleIcon";
import SectionTitle from "@/app/_components/SectionTitle";
import { TbBrandLinkedin, TbBrandGmail, TbQuote } from "react-icons/tb";
import Image from "next/image";

const contactInfo = [
  {
    title: "LinkedIn",
    description: "@nikosdim97",
    href: "https://www.linkedin.com/in/nikosdim97/",
    icon: <TbBrandLinkedin size={40} />,
  },
  {
    title: "Mail",
    description: "nikossoftwaredev@gmail.com",
    href: "mailto:nikossoftwaredev@gmail.com",
    icon: <TbBrandGmail size={40} />,
  },
];

// Mock recommendations data
const recommendations = [
  {
    id: 1,
    text: "Kindly writing to recommend Nikos for any full-stack opportunity that aligns with his skill-set and experience. During his time at Zap, Nikos consistently demonstrated an eagerness to learn and the ability to adapt swiftly to new challenges. He took ownership of projects and was always keen to acquire new knowledge.",
    author: {
      name: "Jacob Devore",
      title: "CFO at Zap",
      company: "Zap",
      image:
        "https://pbs.twimg.com/profile_images/1502888845188210695/b4Bqke-o_400x400.jpg",
      linkedIn: "https://linkedin.com/in/",
    },
    date: "February 2025",
  },
  {
    id: 2,
    text: "Nikos is one of the most talented developers I've had the opportunity to work with. His attention to detail and commitment to writing maintainable",
    author: {
      name: "Alex Chen",
      title: "CTO",
      company: "WebSphere Digital",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      linkedIn: "https://linkedin.com/in/",
    },
    date: "March 2023",
  },
];

const RecommendationsSection = () => {
  return (
    <section id="recommendations" className="w-full flex flex-col items-start">
      <span className="flex flex-col justify-center gap-8 h-full py-1 w-full">
        <SectionTitle title="RECOMMENDATIONS" />

        <div className="grid grid-cols-1 gap-8 w-full">
          {recommendations.map((recommendation) => (
            <div
              key={recommendation.id}
              className="bg-base-100 rounded-lg shadow-md p-6 border border-base-300 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Quote icon */}
                <div className="hidden md:flex md:items-start">
                  <div className="text-primary opacity-20">
                    <TbQuote size={60} />
                  </div>
                </div>

                <div className="flex-1">
                  {/* Recommendation text */}
                  <p className="text-base-content/80 italic mb-6 leading-relaxed">
                    &quot;{recommendation.text}&quot;
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                      <img
                        src={recommendation.author.image}
                        alt={recommendation.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">
                        {recommendation.author.name}
                      </h3>
                      <p className="text-base-content/70 text-sm">
                        {recommendation.author.title} at{" "}
                        {recommendation.author.company}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <AppLink
                          href={recommendation.author.linkedIn}
                          className="text-primary text-sm flex items-center gap-1 hover:underline"
                        >
                          <TbBrandLinkedin size={16} />
                          <span>LinkedIn</span>
                        </AppLink>
                        <span className="text-xs text-base-content/50">
                          {recommendation.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </span>
    </section>
  );
};

export default RecommendationsSection;
