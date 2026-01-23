import { HeroSection } from "@/components/hero";
import { StarryBackground } from "@/components/starry-bg";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarryBackground />
      <div className="relative z-10">
        <HeroSection />
      </div>
    </main>
  );
}
