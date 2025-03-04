/* eslint-disable react/jsx-props-no-spreading */
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  className?: string;
  outlined?: boolean;
}

const ButtonLink = (props: ButtonProps) => {
  const { className, children, href, outlined = true, variant } = props;

  return (
    <Link
      href={href}
      className={`btn ${outlined ? "btn-outline" : ""} ${
        variant ? `btn-${variant}` : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
