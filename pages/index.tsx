import BackgroundImg from "@/components/BackgroundImg";
import Connect from "@/components/Connect";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Frameworks from "@/components/Frameworks";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
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
