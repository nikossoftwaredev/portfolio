"use client";
import MobileHeader from "@/app/_components/header/MobileHeader";
import { headerLinks } from "@/app/_components/header/headerConfig";
import AppLink from "@/app/_components/AppLink";
import { Logo } from "@/app/_components/Logo";
import { LoginButton } from "@/app/_components/LoginButton";

const Header = () => {
  return (
    <header>
      <nav className="bg-base-100 shadow-md fixed top-0 left-0 right-0 w-full z-50 py-2 px-8">
        <span className="md:hidden">
          <MobileHeader />
        </span>
        <span className="hidden md:block">
          <ul className="w-full flex flex-row gap-6 justify-between items-center">
            <AppLink href="/" className="text-xl animate-pulse-scale">
              <Logo />
            </AppLink>
            <div className="flex  gap-6 justify-center items-center">
              {headerLinks.map(({ divId, text }) => {
                return (
                  <li key={divId}>
                    <AppLink href={divId} className="text-xl opacity-90">
                      {text}
                    </AppLink>
                  </li>
                );
              })}
            </div>
            <LoginButton />
          </ul>
        </span>
      </nav>
    </header>
  );
};

export default Header;
