import "./global.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/header/Header";
import { Providers } from "@/app/_components/providers"; // Ensure Providers is correctly imported
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/auth-options";
import AnimatedBackground from "@/app/_components/AnimatedBackground";

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> => {
  const session = await getServerSession(authOptions);

  return (
    <html lang="el" data-theme="forest">
      <body className="text-base-content bg-base-100 relative">
        <Providers initialSession={session}>
          <AnimatedBackground />
          <div className="relative z-10">
            <Header />
            <main className="bg-transparent">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
