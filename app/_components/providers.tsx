// app/providers.tsx
"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export function Providers({
  children,
  initialSession,
}: {
  children: React.ReactNode;
  initialSession: Session | null;
}) {
  return <SessionProvider session={initialSession}>{children}</SessionProvider>;
}
