import { BUSINESS_NAME } from "@/app/_data/general";
import Head from "next/head";

const HeadComponent = () => {
  return (
    <Head>
      <title>{BUSINESS_NAME}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
