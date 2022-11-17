import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Info from "../components/Info";
import Feature from "../components/Feature";
import Product from "../components/Product";
import Battery from "../components/Battery";
import Partner from "../components/Partner";
import Contact from "../components/Contact";

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
      <Battery />

      {/* Partners */}
      <Partner />

      {/* Contact */}
      <Contact />

      {/* Footer */}
    </div>
  );
};

export default Home;
