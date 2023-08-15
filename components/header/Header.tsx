"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import MobileHeader from "@/components/header/MobileHeader";
import AppointmentScroll from "@/components/header/AppointmentScroll";
import { headerInfo, headerLinks } from "@/components/header/headerConfig";

const Header = () => {
  const pathname = usePathname();

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <header>
      <nav className="bg-base-100">
        <span className="md:hidden">
          <MobileHeader />
        </span>
        <span className="hidden md:block">
          <div className="flex flex-wrap justify-center items-center  w-full mb-4 bg-base-300 gap-7  py-3 pr-1">
            {headerInfo.map(({ href, icon, text }) => (
              <Link
                className="text-md flex gap-2 items-center"
                href={href}
                key={href}
              >
                {icon}
                {text}
              </Link>
            ))}
          </div>
          <ul className="w-full flex flex-row gap-6 justify-center items-center mr-1">
            <Link href="/" className="flex items-center animate-pulse-scale">
              <img
                src="/images/logo.png"
                alt="Flowbite Logo"
                className="w-[60px] h-[60px]"
              />
            </Link>
            {headerLinks.map((linkConfig) => {
              let isActive = pathname === linkConfig.path;

              if (linkConfig.path !== "/" && pathname) {
                isActive = pathname === linkConfig.path;
              }

              return (
                <li key={linkConfig.path}>
                  <Link
                    href={linkConfig.path}
                    className={`font-bold hover:text-accent ${
                      isActive ? "text-accent" : ""
                    }`}
                  >
                    {linkConfig.text}
                  </Link>
                </li>
              );
            })}
            <AppointmentScroll />
          </ul>
        </span>
      </nav>
    </header>
  );
};

export default Header;
