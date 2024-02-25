import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Head from "next/head";
import Navigation from "@/components/Header/Navigation";

export default function Home() {
  return (
    <main className="body-cover">
      <Head>
        <title>Iamrealbhuvi | Portfolio</title>
        <meta name="title" content="Iamrealbhuvi | Portfolio" />
        <meta name="description" content="Portfolio site of myself" />
      </Head>
      <Navigation />
    </main>
  );
}
