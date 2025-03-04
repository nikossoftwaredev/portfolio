import "./global.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/header/Header";
import { LayoutProps } from "@/.next/types/app/layout";

const RootLayout = async ({ children }: LayoutProps): Promise<JSX.Element> => {
  return (
    <html lang="el" data-theme="light">
      <body className="text-base-content">
        <Header />
        <main className="bg-base-200">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
