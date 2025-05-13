'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GiftForSection from "@/components/GiftForSection";
import PremiumFeaturesSection from "@/components/PremiumFeaturesSection";
import GuidedPathsSection from "@/components/GuidedPathsSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";

export default function PremiumPage() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Gift For Section */}
      <GiftForSection />
      
      {/* Premium Features Section */}
      <PremiumFeaturesSection />
      
      {/* Guided Paths Section */}
      <GuidedPathsSection />
      
      {/* Partners Section */}
      <PartnersSection />
      
      {/* Final CTA */}
      <CTASection />
      
      <Footer />
    </div>
  );
}