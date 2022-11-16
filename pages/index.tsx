import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Info from "../components/Info";
import Feature from "../components/Feature";
import Product from "../components/Product";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WayFast | Cannabis Cultivation Smart Scales</title>
        <link rel="icon" href="/features_tag.svg" />
      </Head>
      {/* HEADER */}
      <Header />
      {/* CANNABIS CULTIVATION SCALES */}
      <Intro />

      {/* Harvest Compliance Simplified */}
      <Info />

      {/* Features & Benefits */}
      <Feature />

      {/* Products */}
      <Product />

      {/* Harvest In The Dark */}

      {/* Partners */}

      {/* Contact */}

      {/* Footer */}
    </div>
  );
};

export default Home;
