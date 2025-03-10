"use client";
import Button from "@/app/_components/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { FaGithub, FaGoogle, FaUser } from "react-icons/fa";

export const LoginButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div className="flex items-center gap-2">
        <div
          className="btn btn-outline btn-sm"
          onClick={() => {
            signOut();
          }}
        >
          <Image
            className="rounded-full"
            src={session.user?.image || ""}
            alt="User avatar"
            width={20}
            height={20}
          />
          Sign out
        </div>
      </div>
    );
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="btn btn-outline btn-sm">
            <FaUser className="text-lg w-[20px] h-[20px]" /> Login
          </div>
        </DialogTrigger>
        <DialogContent className="bg-base-100 border-none">
          <DialogHeader>
            <DialogTitle>Login to your account</DialogTitle>
            <DialogDescription>
              Choose your preferred login method
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => signIn("google")}>
            <FaGoogle className="text-lg" />
            Continue with Google
          </Button>
          {/* <Button onClick={() => signIn("github")}>
            <FaGithub className="text-lg" />
            Continue with Github
          </Button> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};
