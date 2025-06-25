"use client";
import { headerLinks } from "@/app/_components/header/headerConfig";
import { MdMenu } from "react-icons/md";
import AppLink from "@/app/_components/AppLink";
import { Logo } from "@/app/_components/Logo";
import { LoginButton } from "@/app/_components/LoginButton";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/app/_components/ui/sheet";

const MobileHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between p-2">
        <AppLink href="/" className="text-xl mr-auto animate-pulse-scale">
          <Logo />
        </AppLink>
        <Sheet>
          <SheetTrigger asChild>
            <button className="btn btn-square btn-sm btn-ghost btn-secondary h-[30] flex justify-center mr-1 ml-auto">
              <MdMenu className="text-primary" size={30} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-3/4 flex flex-col items-center justify-center bg-background backdrop-blur-lg border-none"
          >
            <div className="flex flex-col justify-center items-center gap-6">
              {headerLinks.map((linkConfig) => {
                return (
                  <div key={linkConfig.divId}>
                    <SheetClose asChild>
                      <a
                        href={linkConfig.divId}
                        className={`text-3xl text-primary font-extrabold uppercase hover:text-primary transition-colors`}
                      >
                        {linkConfig.text}
                      </a>
                    </SheetClose>
                  </div>
                );
              })}
              <LoginButton />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default MobileHeader;
