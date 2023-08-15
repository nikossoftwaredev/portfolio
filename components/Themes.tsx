"use client";
import AppLink from "@/components/AppLink";
import { useEffect, useState } from "react";

const ALL_THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "retro",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

const Theme = ({ theme }: { theme: string }) => {
  return (
    <div
      data-theme={theme}
      className="card p-4 rounded-xl bg-base-100 text-primary"
    >
      Primary
      <div className="card p-4 rounded-xl bg-base-200  text-accent">
        Accent
        <div className="card p-4 rounded-xl bg-base-300 text-neutral gap-2">
          Neutral
          <p className="text-center font-bold  uppercase text-primary">
            {theme}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              document.documentElement.setAttribute("data-theme", theme);

              localStorage.setItem("theme", theme);
            }}
          >
            Activate
          </button>
          <h1 className="text-primary">Buttons</h1>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-outline">Default Outline</button>
          <button className="btn btn-outline btn-primary">
            Primary Outline
          </button>
          <button className="btn btn-outline btn-secondary">
            Secondary Outline
          </button>
          <button className="btn btn-outline btn-accent">Accent Outline</button>
          <AppLink href="/themes">LINK</AppLink>
        </div>
      </div>
    </div>
  );
};

const Themes = () => {
  const [themes, setThemes] = useState(ALL_THEMES);

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme") || "retro";

    setThemes([
      selectedTheme,
      ...ALL_THEMES.filter((theme) => theme !== selectedTheme),
    ]);
    return;
  }, []);

  return (
    <section className="grid gap-4 grid-cols-1 p-2 justify-center items-center">
      {themes.map((theme) => (
        <Theme key={theme} theme={theme} />
      ))}
    </section>
  );
};

export default Themes;
