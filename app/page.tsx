import { BentoDemo } from "@/components/BentoDemo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-gray-50 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="w-full">
        <Hero />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
