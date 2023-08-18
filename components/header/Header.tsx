"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import MobileHeader from "@/components/header/MobileHeader";
import AppointmentScroll from "@/components/header/AppointmentScroll";
import { headerInfo, headerLinks } from "@/components/header/headerConfig";

const Header = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <header>
      <nav className="bg-base-100 shadow-md py-8 px-8 fixed top-0 w-full">
        <span className="md:hidden">
          <MobileHeader />
        </span>
        <span className="hidden md:block">
          <ul className="w-full flex flex-row gap-6 justify-center items-center ">
            <Link
              href="#home"
              className="font-bold text-xl mr-auto animate-pulse-scale"
            >
              Nikos-dim.dev
            </Link>
            {headerLinks.map(({ divId, text }) => {
              return (
                <li key={divId}>
                  <Link
                    href={divId}
                    className={`font-semibold text-xl hover:text-accent opacity-90`}
                  >
                    {text}
                  </Link>
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
