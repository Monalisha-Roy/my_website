import HomeHero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Education from "@/components/Eduducation";
import Skillset from "@/components/Skillset";
import Project from "@/components/Project";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Navbar />
      <HomeHero />
      <div className="flex flex-col items-center justify-center text-center w-11/12">
        <Education />
        <Skillset />
        <Project />
        <About />
      </div>
      <Footer />
    </div>
  );
}