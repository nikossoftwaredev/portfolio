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
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const LoginButton = () => {
  const { data: session, status } = useSession();
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogleSignIn = () => {
    // Get current URL with parameters to use as callback
    const callbackUrl = window.location.href;
    setGoogleLoading(true);
    signIn("google", { callbackUrl });
  };

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
        <DialogTitle className="sr-only">Login to your account</DialogTitle>
        <DialogTrigger>
          <div className="btn btn-outline btn-sm">
            <FaUser className="text-lg w-[20px] h-[20px]" /> Login
          </div>
        </DialogTrigger>
        <DialogContent className="bg-base-100 border-none sm:max-w-md w-full">
          <DialogHeader>
            <DialogTitle className="text-xl font-medium text-center">
              Login to your account
            </DialogTitle>
            <DialogDescription className="text-center">
              Choose your preferred login method
            </DialogDescription>
          </DialogHeader>
          <div className="p-2 max-w-md w-full mx-auto flex flex-col items-center justify-center gap-6 px-4">
            <div className="w-full space-y-4">
              {/* Google Button */}
              <Button
                onClick={handleGoogleSignIn}
                disabled={googleLoading}
                className="w-full h-12"
              >
                <div className="flex items-center justify-center gap-3">
                  {googleLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                  ) : (
                    <FcGoogle style={{ width: "24px", height: "24px" }} />
                  )}
                  <span>
                    {googleLoading ? "Signing in..." : "Continue with Google"}
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
