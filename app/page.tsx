import { BentoDemo } from "@/components/BentoDemo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-gray-50 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <BentoDemo/>
      </div>
    </main>
  );
}
