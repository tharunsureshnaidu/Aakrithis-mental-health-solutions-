import { Hero } from "@/components/Hero";
import { Founder } from "@/components/Founder";
import { Pillars } from "@/components/Pillars";
import { Testimonials } from "@/components/Testimonials";
import { Benefits } from "@/components/Benefits";
import { ConcernsTool } from "@/components/ConcernsTool";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <main className="flex-1">
        <Founder />
        <Pillars />
        <Testimonials />
        <Benefits />
        <ConcernsTool />
      </main>
      <Footer />
    </>
  );
}
