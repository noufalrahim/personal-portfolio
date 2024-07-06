import BackgroundImg from "@/components/BackgroundImg";
import Connect from "@/components/Connect";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Frameworks from "@/components/Frameworks";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import React from "react";
import Projects from "@/components/Projects";

export default function Home() {

  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <main className="dark:bg-black bg-white min-h-screen">
      {
        darkMode && (
          <BackgroundImg />
        )
      }
      <div className="flex flex-col items-center justify-center min-h-screen z-10 relative ">
        <Navbar 
          darkMode={darkMode}
          setDarkMode={(value) => setDarkMode(value)}
        />
        <Hero />
        <Projects />
        <Skills />
        <Frameworks />
        <Connect />
        <ContactMe />
        <Footer />
      </div>
    </main>
  );
}
