import { AboutSection } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { EducationSection } from "@/components/education";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { ProjectsSection } from "@/components/projects";
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
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
