export interface Project {
  title: string;
  githubLink: string;
  tags: string[];
  image: string;
  description: string;
  previewLink?: string;
  chipColor?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Kratisix",
    githubLink: "https://github.com/nikossoftwaredev/booking-service",
    previewLink: "https://www.kratisix.com/en",
    tags: ["React", "Next", "Prisma", "PostgreSQL"],
    image: "images/projects/www.kratisix.com_en.png",
    description:
      "A booking service SaaS for any company that wants a booking system.",
    chipColor: "#006DEC",
  },
  {
    title: "Query Bee",
    githubLink: "",
    previewLink: "http://ai.sftgroup.gr",
    tags: ["Next.js", "Python", "RAG"],
    image: "images/projects/ai.sftgroup.gr.webp",
    description:
      "An intelligent chatbot platform designed for academic research.",
    chipColor: "#FFA500",
  },
  {
    title: "Micro Pump",
    githubLink: "https://github.com/nikossoftwaredev/pump-fun-micro-buys",
    previewLink: "https://www.micropump.fun/",
    tags: ["Solana", "Next", "Telegram Bot"],
    image: "images/projects/www.micropump.fun_.png",
    description: "A DAPP based on Solana for pumping tokens",
    chipColor: "#DF3B7D",
  },
  {
    title: "Poseidon Transfers",
    githubLink: "https://github.com/nikossoftwaredev/tranfer",
    previewLink: "https://poseidontranfer.vercel.app/en-US",
    tags: ["Next", "SQL"],
    image: "images/projects/poseidontranfer.vercel.app_en-US.png",
    description: "A spotify clone includes payments",
    chipColor: "#006DEC",
  },
  {
    title: "I Ching : Balance Way ☯️",
    githubLink: "https://github.com/nikossoftwaredev/i-ching",
    previewLink: "https://ichingbalance.gr/",
    tags: ["React", "Next"],
    image: "images/projects/ichingbalance.gr_.webp",
    description:
      "With a focus on simplicity and clean design, this site promotes chinese medicine services, and a way to book an appointment.",
    chipColor: "#FFBB26",
  },
  {
    title: "Salsa Rayo ⚡",
    githubLink: "https://github.com/nikossoftwaredev/salsa-rayo",
    previewLink: "https://salsarayo.com/",
    tags: ["React", "Next"],
    image: "images/projects/salsa-rayo.com.webp",
    description:
      "A website for a salsa school that offers salsa classes and events.",
  },
  {
    title: "Open AI Blog",
    githubLink: "https://github.com/nikossoftwaredev/my-blog",
    previewLink: "https://nikos-blog.netlify.app/blogs",
    tags: ["OpenAI", "React", "Next"],
    image: "images/projects/nikos-blog.netlify.app_blogs.webp",
    description:
      "An AI blog that uses the OpenAI API to generate content. The blog is built with Next.js and Tailwind CSS.",
    chipColor: "#8E4EC6",
  },
  {
    title: "Riddles Tool 🖋️",
    githubLink: "https://github.com/nikossoftwaredev/riddles-tool",
    previewLink: "https://riddles-tool.netlify.app/caesars`",
    tags: ["React", "Mobile"],
    image: "images/projects/riddles-tool.netlify.app.png",
    description:
      "And app that helps you solve riddles and puzzles. Optimized for mobile devices, works offline.",
  },
  {
    title: "Riddle Up 🧠",
    githubLink: "",
    previewLink: "https://apkpure.com/riddle-up/com.NikosD.RiddleUp",
    tags: ["Unity", "C#"],
    image: "images/projects/riddle-up.webp",
    description:
      "A simple and fun riddle game. The app is built with Unity and C#.",
    chipColor: "#006DEC",
  },
  {
    title: "AI Dinos 🦖",
    githubLink: "",
    previewLink: "https://dinos-ai.netlify.app/",
    tags: ["Machine Learning", "Neural Networks"],
    image: "images/projects/dinos-ai.netlify.app_.png",
    description:
      "Using machine learning and neural networks, the generation algorithm gets better and better at passing the level.",
    chipColor: "#DF3B7D",
  },
];
