"use client";
import { headerLinks } from "@/app/_components/header/headerConfig";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import AppLink from "@/app/_components/AppLink";
import { Logo } from "@/app/_components/Logo";
import { LoginButton } from "@/app/_components/LoginButton";

const MobileHeader = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-2">
        <AppLink href="/" className="text-xl mr-auto animate-pulse-scale">
          <Logo />
        </AppLink>
        <button className="btn btn-square btn-sm btn-ghost btn-secondary h-[30] flex justify-center mr-1 ml-auto">
          {openModal ? (
            <MdClose
              className="text-primary"
              onClick={() => setOpenModal(false)}
              size={30}
            />
          ) : (
            <MdMenu
              className="text-primary"
              onClick={() => setOpenModal(true)}
              size={30}
            />
          )}
        </button>
      </div>
      {openModal && (
        <div
          className="overscroll-none overflow-hidden p-3 
                    h-screen-small w-full max-h-screen 
                    max-w-none flex items-center flex-col justify-center
                    backdrop-blur-lg"
        >
          <span className="flex flex-col justify-center items-center gap-4 mb-10">
            {headerLinks.map((linkConfig) => {
              return (
                <span key={linkConfig.divId}>
                  <a
                    onClick={() => setOpenModal(false)}
                    href={linkConfig.divId}
                    className={`text-3xl text-primary font-extrabold uppercase hover:text-primary`}
                  >
                    {linkConfig.text}
                  </a>
                </span>
              );
            })}
            <LoginButton />
          </span>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
