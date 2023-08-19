"use client";
import Link from "next/link";
import { useEffect } from "react";
import MobileHeader from "@/components/header/MobileHeader";
import { headerLinks } from "@/components/header/headerConfig";
import AppLink from "@/components/AppLink";

const Header = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <header>
      <nav className="bg-base-100 shadow-md py-8 px-8 fixed top-0 w-full z-10">
        <span className="md:hidden">
          <MobileHeader />
        </span>
        <span className="hidden md:block">
          <ul className="w-full flex flex-row gap-6 justify-center items-center ">
            <AppLink
              href="#home"
              className="text-xl mr-auto animate-pulse-scale"
            >
              ND
            </AppLink>
            {headerLinks.map(({ divId, text }) => {
              return (
                <li key={divId}>
                  <AppLink href={divId} className="text-xl opacity-90">
                    {text}
                  </AppLink>
                </li>
              );
            })}
          </ul>
        </span>
      </nav>
    </header>
  );
};

export default Header;
