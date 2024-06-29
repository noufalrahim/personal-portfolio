import BackgroundImg from "@/src/components/BackgroundImg";
import Connect from "@/src/components/Connect";
import ContactMe from "@/src/components/ContactMe";
import Footer from "@/src/components/Footer";
import Frameworks from "@/src/components/Frameworks";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Skills from "@/src/components/Skills";
import React from "react";

export default function Home() {


  return (
    <main className="bg-black min-h-screen">
            <BackgroundImg />
      <div className="flex flex-col items-center justify-center min-h-screen z-10 relative ">
      <Navbar />
        <Hero />
        <Skills />
        <Frameworks />
        <Connect />
        <ContactMe />
        <Footer />
      </div>

    </main>
  );
}
