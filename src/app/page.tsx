import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import TimelineSection from '@/components/sections/TimelineSection'
import ContactSection from '@/components/sections/ContactSection'
import CustomCursor from '@/components/ui/CustomCursor'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
      <Footer />
    </main>
  )
}