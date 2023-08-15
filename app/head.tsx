import { BUSINESS_NAME } from "@/data/general";
import Head from "next/head";

const MainPage = () => {
  return (
    <Head>
      <title>{BUSINESS_NAME}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MainPage;
