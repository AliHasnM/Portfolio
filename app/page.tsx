"use client";

// Portfolio Components
import AliHassan from "./components/AliHassan";
import AboutPage from "./components/About";
import TechStack from "./components/TechStack";
import FeaturedProjects from "./components/FeaturedProjects";
import ExperiencePage from "./components/Experience";
import EducationPage from "./components/Education";
import TestimonialsPage from "./components/Testimonials";
import BlogPage from "./components/BlogPosts";
import ContactPage from "./components/Contact";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <AliHassan />
      <AboutPage />
      <TechStack />
      <FeaturedProjects showViewAll={true} />
      <ExperiencePage />
      <EducationPage />
      <TestimonialsPage />
      <BlogPage />
      <ContactPage />
    </main>
  );
}
