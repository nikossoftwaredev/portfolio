"use client";
import React from "react";

interface ChipProps {
  title: string;
  color?: string; // Hex color value
  onClick?: (title: string) => void;
}

const Chip: React.FC<ChipProps> = ({ title, color = "#13AD9B", onClick }) => {
  return (
    <div
      className="flex cursor-pointer items-center justify-between rounded-2xl h-8 px-4 text-xs shadow-none transition-opacity duration-300 ease-linear"
      style={{
        color: color, // Text color is the given hex color
        backgroundColor: `color-mix(in srgb, ${color}, black 80%)`, // Darker background version of the color
      }}
      onClick={() => onClick && onClick(title)}
    >
      {title}
    </div>
  );
};

export default Chip;
