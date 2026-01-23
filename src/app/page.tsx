import { AboutSection } from "@/components/about";
import { HeroSection } from "@/components/hero";
import { StarryBackground } from "@/components/starry-bg";
import { TalentsSection } from "@/components/talents";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarryBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TalentsSection />
      </div>
    </main>
  );
}
