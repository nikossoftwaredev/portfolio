import "./global.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import Footer from "components/Footer";
import Header from "@/components/header/Header";
import { PageProps } from "types/general";

const RootLayout = async ({ children }: PageProps): Promise<JSX.Element> => {
  return (
    <html lang="el" data-theme="light">
      <body className="text-base-content">
        <Header />
        <main className="bg-base-200 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
