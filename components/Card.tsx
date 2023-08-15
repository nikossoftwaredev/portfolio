/* eslint-disable react/jsx-props-no-spreading */
import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary" | "default" | "transparent";
}

const Card = (props: CardProps) => {
  const { className, children } = props;

  return (
    <div {...props} className={`rounded-xl shadow-md bg-base-200 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
