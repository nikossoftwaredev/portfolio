import "./global.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/header/Header";
import { Providers } from "@/app/_components/providers"; // Ensure Providers is correctly imported

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> => {
  return (
    <html lang="el" data-theme="forest">
      <body className="text-base-content bg-base-100">
        <Providers>
          <Header />
          <main className="bg-base-200">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
