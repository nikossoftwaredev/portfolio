"use client";
import MobileHeader from "@/app/_components/header/MobileHeader";
import { headerLinks } from "@/app/_components/header/headerConfig";
import AppLink from "@/app/_components/AppLink";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <nav className="bg-base-100 shadow-md fixed top-0 w-full z-10 py-2 px-8">
        <span className="md:hidden">
          <MobileHeader />
        </span>
        <span className="hidden md:block">
          <ul className="w-full flex flex-row gap-6 justify-center items-center">
            <AppLink href="/" className="text-xl mr-auto animate-pulse-scale">
              <Image src="/images/logo.png" alt="logo" width={32} height={32} />
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
