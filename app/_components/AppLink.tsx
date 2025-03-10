import Link, { LinkProps } from "next/link";
import React from "react";

type AppLinkProps = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const AppLink = (props: AppLinkProps): JSX.Element => {
  return (
    <Link
      {...props}
      className={`hover:text-accent font-bold ${props.className} ease-in-out duration-300 flex gap-2 items-center`}
    >
      {props.children}
    </Link>
  );
};

export default AppLink;
