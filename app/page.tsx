"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Play from "@/components/Play";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>Ammaar's Portfolio</title>
        <meta name="description" content="Coded using NextJS" />
        <meta property="og:title" content="Ammaar's Portfolio" />
        <meta property="og:description" content="Coded using NextJS" />
        <meta
          property="og:image"
          content="https://ammaarkhan.netlify.app/images/og-image-preview.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ammaarkhan.netlify.app/" />
      </Head>
      <main className="relative bg-gray-50 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="w-full">
        <Hero />
        <Projects />
        <Play />
        <Footer />
      </div>
    </main>
    </>
    
  );
}