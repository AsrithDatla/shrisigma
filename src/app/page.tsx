'use client';

import HeroBanner from '@/components/HeroBanner';
import ContactForm from '@/components/ContactForm';
import InsuranceSlider from '@/components/InsuranceSlider';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import DoctorsSection from '@/components/DoctorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';

export default function HomePage() {
  return (
    <>
      {/* Hero Banner with Contact Form */}
      <section className="relative">
        <HeroBanner />
        <ContactForm />
      </section>

      {/* Insurance Partners */}
      <InsuranceSlider />

      {/* About Section */}
      <div className="pb-4 md:pb-0">
        <AboutSection />
      </div>

      {/* Services Section */}
      <div className="pb-4 md:pb-0">
        <ServicesSection />
      </div>

      {/* Doctors Section */}
      <div className="pb-4 md:pb-0">
        <DoctorsSection />
      </div>

      {/* Testimonials */}
      <div className="pb-4 md:pb-0">
        <TestimonialsSection />
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}