import { BentoDemo } from "@/components/BentoDemo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-gray-50 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="w-full">
        <Hero />
        <BentoDemo />
        <Footer />
      </div>
    </main>
  );
}
