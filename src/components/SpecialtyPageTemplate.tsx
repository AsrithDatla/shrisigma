'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, Award, Phone } from 'lucide-react';
import ContactForm from './ContactForm';
import { openWhatsAppWithMessage } from '@/utils/whatsappHelper';

// FAQ Accordion Component
const FAQAccordion = ({ faqs }: { faqs: FAQ[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-200">
          <button
            className="flex items-center justify-between w-full p-6 text-left"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold text-hospital-blue pr-4">
              {faq.question}
            </h3>
            <div className="flex-shrink-0">
              <svg
                className={`w-6 h-6 text-hospital-blue transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

interface Doctor {
  name: string;
  qualification: string;
  experience: string;
  image: string;
  specialization?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface HeroStat {
  number: string;
  label: string;
}

interface ProctologyInfo {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  risksOfDelay: string[];
  laserBenefits: string[];
}

interface TreatmentStat {
  number: string;
  label: string;
}

interface ExcellenceService {
  title: string;
  icon: string;
}

interface TreatmentStep {
  step: string;
  title: string;
  description: string;
  image: string;
}

interface Testimonial {
  name: string;
  review: string;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface CardiologyInfo {
  title: string;
  description: string;
  additionalInfo: string;
  image: string;
}

interface Condition {
  title: string;
  description: string;
}

interface DiagnosticTool {
  title: string;
  description: string;
}

interface TreatmentOption {
  title: string;
  description: string;
}

interface RehabilitationService {
  title: string;
  description: string;
}

interface HospitalMessage {
  title: string;
  description: string;
}

interface SpecialtyPageProps {
  title: string;
  subtitle: string;
  description: string;
  bannerImage: string;
  sideImage?: string;
  features?: Feature[];
  benefits?: string[];
  doctors?: Doctor[];
  procedures?: string[];
  whyChooseUs?: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string;

  // Universal optional sections
  heroStats?: HeroStat[];
  testimonials?: Testimonial[];
  faqs?: FAQ[];

  // Piles-specific sections
  proctologyInfo?: ProctologyInfo;
  treatmentStats?: TreatmentStat[];
  additionalFeatures?: string[];
  proctologyServices?: string[];
  excellenceServices?: ExcellenceService[];
  treatmentSteps?: TreatmentStep[];

  // Cardiology/Urology-specific sections
  specialtyInfo?: {
    title: string;
    description: string;
    additionalInfo?: string;
    image: string;
    doctorProfiles?: Doctor[];
  };
  commonConditions?: Condition[];
  diagnosticTools?: DiagnosticTool[];
  treatmentOptions?: TreatmentOption[];
  rehabilitation?: RehabilitationService[];
  hospitalMessage?: HospitalMessage;
}

const SpecialtyPageTemplate = ({
  title,
  subtitle,
  description,
  bannerImage,
  sideImage,
  features,
  benefits,
  doctors,
  procedures,
  whyChooseUs,
  metaTitle,
  metaDescription,
  keywords,
  heroStats,
  testimonials,
  faqs,
  proctologyInfo,
  treatmentStats,
  additionalFeatures,
  proctologyServices,
  excellenceServices,
  treatmentSteps,
  specialtyInfo,
  commonConditions,
  diagnosticTools,
  treatmentOptions,
  rehabilitation,
  hospitalMessage,
}: SpecialtyPageProps) => {
  return (
    <>
      {/* Enhanced Hero Section with Background Image */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={bannerImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-hospital-blue/85 via-hospital-blue-dark/75 to-hospital-green/85"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[60vh] md:min-h-[80vh] py-8 sm:py-12 lg:py-0">
            {/* Left Side - Content */}
            <div className="animate-fade-in-up text-center lg:text-left">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-hospital-yellow rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                <span className="text-xs sm:text-sm font-semibold">Specialized Treatment</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-3 sm:mb-4 md:mb-6 leading-tight">
                {title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 md:mb-6 opacity-90 leading-relaxed font-medium">
                {subtitle}
              </p>

              <p className="text-sm sm:text-base md:text-lg opacity-80 leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                {description}
              </p>

              {/* Hero Stats */}
              {heroStats && (
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-md mx-auto lg:mx-0">
                  {heroStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-hospital-teal mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm opacity-90 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="tel:+918977763308"
                  className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-hospital-blue font-bold rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 hover:bg-white hover:scale-105 shadow-2xl text-xs sm:text-sm md:text-base"
                >
                  <Phone className="mr-1 sm:mr-2 md:mr-3 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:animate-bounce" />
                  <span className="hidden sm:inline">Call: </span>+91 89777 63308
                </Link>
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center justify-center border-2 border-white/80 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-white font-bold rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 hover:bg-white hover:text-hospital-blue shadow-2xl text-xs sm:text-sm md:text-base"
                >
                  Book Appointment
                  <svg className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Side - Contact Form - Hidden on mobile, shown below hero */}
            <div className="animate-fade-in-right hidden lg:block">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Enhanced Floating Achievement Badge */}
        <div className="absolute top-4 sm:top-6 md:top-10 right-2 sm:right-4 md:right-10 bg-hospital-green/90 backdrop-blur-sm p-2 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl animate-float">
          <div className="text-center text-white">
            <div className="text-sm sm:text-xl md:text-2xl font-bold">24/7</div>
            <div className="text-xs sm:text-sm font-medium">Emergency</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mobile Contact Form - Only visible on mobile */}
      <section className="lg:hidden bg-gradient-to-br from-gray-50 to-white py-8">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Insurance Section */}
      <section className="bg-gradient-to-r from-hospital-gray-50 to-white py-6 sm:py-8" id="insurance">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-hospital-gray-700 mb-2 sm:mb-4">
              All Insurances & Cashless Facility Available
            </h2>
          </div>

          {/* Insurance Logos Slider */}
          <div className="relative overflow-hidden mb-6 sm:mb-8">
            <div className="flex animate-scroll space-x-4 sm:space-x-8">
              {/* First set of insurance logos */}
              <div className="flex space-x-4 sm:space-x-8 flex-shrink-0">
                <div className="w-24 h-16 sm:w-32 sm:h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-1 sm:p-2">
                  <Image src="/images/Cards/FHPL.png" alt="FHPL Insurance" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/Health India TPA.png" alt="Health India TPA" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/Manipal Cigna.png" alt="Manipal Cigna" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/Medi Assist.png" alt="Medi Assist" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/National Insurance.png" alt="National Insurance" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/NIA.png" alt="NIA Insurance" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/Oriental Insurance.png" alt="Oriental Insurance" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/Tata_AIG.png" alt="Tata AIG" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/United India Insurance.png" alt="United India Insurance" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/Vidal Health.png" alt="Vidal Health" width={120} height={60} className="object-contain" />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8 flex-shrink-0">
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/FHPL.png" alt="FHPL Insurance" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/Health India TPA.png" alt="Health India TPA" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/Manipal Cigna.png" alt="Manipal Cigna" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/Medi Assist.png" alt="Medi Assist" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/National Insurance.png" alt="National Insurance" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/NIA.png" alt="NIA Insurance" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/Oriental Insurance.png" alt="Oriental Insurance" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/Tata_AIG.png" alt="Tata AIG" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/United India Insurance.png" alt="United India Insurance" width={120} height={60} className="object-contain" />
                </div>
                <div className="w-32 h-20 bg-white rounded-lg shadow-soft flex items-center justify-center p-2">
                  <Image src="/images/Cards/Vidal Health.png" alt="Vidal Health" width={120} height={60} className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation Buttons */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 md:grid-cols-6">
            <Link href="#doctors" className="flex flex-col items-center p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 group">
              <div className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 text-hospital-blue group-hover:scale-110 transition-transform duration-200">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 9.55 14.55 10 14 10S13 9.55 13 9V7H11V9C11 9.55 10.45 10 10 10S9 9.55 9 9V7H3V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-medium text-center">DOCTORS</span>
            </Link>
            <Link href="#services" className="flex flex-col items-center p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 group">
              <div className="w-6 h-6 mb-2 text-hospital-blue group-hover:scale-110 transition-transform duration-200">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H5A3,3 0 0,0 2,11V20A3,3 0 0,0 5,23H19A3,3 0 0,0 22,20V11A3,3 0 0,0 19,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-center">SERVICES</span>
            </Link>
            <Link href="#testimonials" className="flex flex-col items-center p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 group">
              <div className="w-6 h-6 mb-2 text-hospital-blue group-hover:scale-110 transition-transform duration-200">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-center">TESTIMONIALS</span>
            </Link>
            <Link href="#insurance" className="flex flex-col items-center p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 group">
              <div className="w-6 h-6 mb-2 text-hospital-blue group-hover:scale-110 transition-transform duration-200">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-center">INSURANCE</span>
            </Link>
            <Link href="#locations" className="flex flex-col items-center p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 group">
              <div className="w-6 h-6 mb-2 text-hospital-blue group-hover:scale-110 transition-transform duration-200">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-center">LOCATIONS</span>
            </Link>
            <Link href="tel:+918977763308" className="flex flex-col items-center p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 group">
              <div className="w-6 h-6 mb-2 text-hospital-blue group-hover:scale-110 transition-transform duration-200">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-center">CONTACT</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Proctology Info Section */}
      {proctologyInfo && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-hospital-blue mb-4 sm:mb-6">
                {proctologyInfo.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="text-left">
                <div className="mb-4 sm:mb-6">
                  <span className="text-hospital-blue font-bold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                    Expert Care in Proctology
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-hospital-blue mt-2 mb-3 sm:mb-4">
                    Experienced Female Proctology Surgeon
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {proctologyInfo.description}
                  </p>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-bold text-hospital-blue mb-2 sm:mb-3">
                    Risks of Delaying Piles Surgery:
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {proctologyInfo.risksOfDelay.map((risk, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-hospital-blue rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-600">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-hospital-blue mb-2 sm:mb-3">
                    Why Opt for a Laser Treatment?
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {proctologyInfo.laserBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-hospital-green mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl sm:rounded-2xl shadow-large">
                  <Image
                    src={proctologyInfo.image}
                    alt={`${title} treatment in Madhapur`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Specialty Info Section */}
      {specialtyInfo && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {/* Main Content - 2/3 width */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-hospital-blue mb-4 sm:mb-6">
                  {specialtyInfo.title}
                </h2>

                {/* Doctor Profiles */}
                {specialtyInfo.doctorProfiles && specialtyInfo.doctorProfiles.length > 0 && (
                  <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                    {specialtyInfo.doctorProfiles.map((doctor, index) => (
                      <div key={index} className="bg-gradient-to-r from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-medium">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
                          <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg sm:rounded-xl">
                            <Image
                              src={doctor.image}
                              alt={doctor.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-hospital-blue mb-2">{doctor.name}</h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-2">{doctor.qualification}</p>
                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{doctor.specialization}</p>
                            <Link
                              href="tel:+918977763308"
                              className="inline-flex items-center bg-hospital-blue text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-hospital-blue-dark transition-colors duration-200"
                            >
                              Book An Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {specialtyInfo.description}
                  </p>

                  <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-xl sm:rounded-2xl shadow-large mb-4 sm:mb-6">
                    <Image
                      src={specialtyInfo.image}
                      alt={`${title} Department`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 66vw"
                    />
                  </div>

                  {specialtyInfo.additionalInfo && (
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {specialtyInfo.additionalInfo}
                    </p>
                  )}
                </div>
              </div>

              {/* Sidebar - 1/3 width */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-hospital-blue to-hospital-blue-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white sticky top-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">DEPARTMENTS</h3>
                  <div className="space-y-1 sm:space-y-2">
                    {[
                      { name: 'Piles', href: '/specialities/best-piles-hospital-in-madhapur' },
                      { name: 'Cardiology', href: '/specialities/cardiology-hospital-madhapur-hyderabad' },
                      { name: 'Critical Care', href: '/specialities/critical-care-hospital-hyderabad' },
                      { name: 'Diabetology', href: '/specialities/diabetes-treatment-hyderabad' },
                      { name: 'ENT', href: '/specialities/ent-specialist-madhapur-hyderabad' },
                      { name: 'General Medicine', href: '/specialities/general-medicine-doctors-hyderabad' },
                      { name: 'Gynecology', href: '/specialities/gynecology-services-madhapur-hyderabad' },
                      { name: 'Neuroscience', href: '/specialities/neuroscience-care-madhapur-hyderabad' },
                      { name: 'Orthopedics', href: '/specialities/orthopedic-hospital-hyderabad' },
                      { name: 'Urology', href: '/specialities/urology-hospital-madhapur-hyderabad' }
                    ].map((dept, index) => (
                      <Link
                        key={index}
                        href={dept.href}
                        className="flex items-center justify-between p-2 sm:p-3 border-b border-white/20 hover:bg-white/10 transition-colors duration-200 group"
                      >
                        <span className="text-sm sm:text-base font-medium">{dept.name}</span>
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Common Conditions Section */}
      {commonConditions && (
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-hospital-blue text-center mb-8 sm:mb-12">
              Common Conditions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {commonConditions.map((condition, index) => (
                <div key={index} className="group flex items-start bg-white p-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 bg-hospital-green/10 rounded-lg flex items-center justify-center group-hover:bg-hospital-green group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-hospital-green group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-hospital-blue mb-2 group-hover:text-hospital-green transition-colors duration-300">
                      {condition.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Diagnostic Tools Section */}
      {diagnosticTools && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-hospital-blue text-center mb-12">
              Diagnostic Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {diagnosticTools.map((tool, index) => (
                <div key={index} className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-hospital-blue/10 rounded-xl flex items-center justify-center group-hover:bg-hospital-blue group-hover:scale-110 transition-all duration-300 mb-4">
                      <svg className="w-6 h-6 text-hospital-blue group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-hospital-blue mb-2 group-hover:text-hospital-green transition-colors duration-300">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Treatment Options Section */}
      {treatmentOptions && (
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-hospital-blue text-center mb-12">
              Treatment Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {treatmentOptions.map((option, index) => (
                <div key={index} className="group flex items-start bg-white p-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 bg-hospital-teal/10 rounded-lg flex items-center justify-center group-hover:bg-hospital-teal group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-hospital-teal group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-hospital-blue mb-2 group-hover:text-hospital-teal transition-colors duration-300">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rehabilitation Section */}
      {rehabilitation && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-hospital-blue text-center mb-12">
              Rehabilitation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rehabilitation.map((service, index) => (
                <div key={index} className="group flex items-start bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 bg-hospital-yellow/20 rounded-lg flex items-center justify-center group-hover:bg-hospital-yellow group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-hospital-yellow group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-hospital-blue mb-2 group-hover:text-hospital-yellow transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hospital Message Section */}
      {hospitalMessage && (
        <section className="py-12 sm:py-16 bg-gradient-to-r from-hospital-blue/10 via-hospital-green/10 to-hospital-blue/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-hospital-blue mb-6">
                {hospitalMessage.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {hospitalMessage.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Treatment Stats Section */}
      {treatmentStats && (
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-hospital-blue mb-4">
                Best piles doctor and proctologist in <span className="text-hospital-blue">Hyderabad</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {treatmentStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300 text-center">
                  <div className="text-3xl font-bold text-hospital-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {additionalFeatures && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300 text-center">
                    <div className="text-gray-700 font-medium">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Proctology Services Section */}
      {proctologyServices && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-hospital-blue mb-4">
                Technical excellence at every step of the<br />
                <span className="text-hospital-green font-bold">Proctology procedure</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {proctologyServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300 text-center group">
                  <div className="text-sm font-medium text-hospital-blue group-hover:text-hospital-green transition-colors duration-300">
                    {service}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Excellence Services Section */}
      {excellenceServices && (
        <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-hospital-blue mb-4">
                Our Excellence <span className="text-hospital-green">Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Services */}
              <div className="space-y-6">
                {excellenceServices.slice(0, 3).map((service, index) => (
                  <div key={index} className="group flex items-center bg-white p-6 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                    <div className="w-16 h-16 mr-6 flex-shrink-0 bg-hospital-blue/10 rounded-xl flex items-center justify-center group-hover:bg-hospital-blue group-hover:scale-110 transition-all duration-300">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={32}
                        height={32}
                        className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-hospital-blue group-hover:text-hospital-green transition-colors duration-300">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Services */}
              <div className="space-y-6">
                {excellenceServices.slice(3).map((service, index) => (
                  <div key={index} className="group flex items-center bg-white p-6 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                    <div className="w-16 h-16 mr-6 flex-shrink-0 bg-hospital-blue/10 rounded-xl flex items-center justify-center group-hover:bg-hospital-blue group-hover:scale-110 transition-all duration-300">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={32}
                        height={32}
                        className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-hospital-blue group-hover:text-hospital-green transition-colors duration-300">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Content Section */}
            {sideImage && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-16">
                <div className="relative">
                  <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl shadow-large">
                    <Image
                      src={sideImage}
                      alt={`${title} Treatment in Hyderabad`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-hospital-blue mb-6">
                    Why Early Treatment for Piles is Crucial
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Delaying piles surgery can lead to worsening symptoms and complications. The condition may become more painful and difficult to manage as it progresses. Early intervention with laser treatment can help you avoid these issues and achieve a faster, more comfortable recovery.
                  </p>

                  <h4 className="text-xl font-bold text-hospital-blue mb-4">
                    Risks of Delaying <span className="text-hospital-green">Piles</span> Surgery
                  </h4>
                  <div className="space-y-3">
                    {proctologyInfo?.risksOfDelay.map((risk, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-hospital-green mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{risk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Features Section */}
      {features && features.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-hospital-blue/10 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-hospital-blue" />
                <span className="text-xs sm:text-sm font-semibold text-hospital-blue">Treatment Benefits</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-hospital-blue mb-4 sm:mb-6">
                Why Choose Our <span className="text-hospital-green">{title}</span> Services?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Advanced medical technology and expert care for the best treatment outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features?.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-large hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full text-center">
                    <div className="mb-4 sm:mb-6 flex justify-center">
                      <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl sm:rounded-2xl bg-hospital-blue/10 group-hover:bg-hospital-blue group-hover:scale-110 transition-all duration-300">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={32}
                          height={32}
                          className="sm:w-10 sm:h-10 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                        />
                      </div>
                    </div>
                    <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold font-display text-hospital-blue group-hover:text-hospital-green transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>

                    {/* Hover Effect Line */}
                    <div className="mt-4 sm:mt-6 flex justify-center">
                      <div className="w-8 h-1 bg-gradient-to-r from-hospital-blue to-hospital-green rounded-full opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Treatment Benefits Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-hospital-green/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-5 h-5 mr-2 text-hospital-green" />
              <span className="text-sm font-semibold text-hospital-green">Treatment Benefits</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-hospital-blue mb-6 leading-tight">
              Why Choose Our <span className="text-hospital-green">{title}</span>
              <span className="block text-hospital-green">Services?</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive benefits and procedures available for your {title.toLowerCase()} treatment at Shri Sigma Hospital
            </p>
          </div>

          {/* Treatment Benefits Grid */}
          {benefits && benefits.length > 0 && (
            <div className="mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-hospital-blue text-center mb-8">
                Benefits of Our Treatment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {benefits?.map((benefit, index) => (
                  <div key={index} className="group flex items-start bg-white p-4 sm:p-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-10 h-10 bg-hospital-green/10 rounded-xl flex items-center justify-center group-hover:bg-hospital-green group-hover:scale-110 transition-all duration-300">
                        <CheckCircle className="w-5 h-5 text-hospital-green group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Procedures Section */}
          {procedures && (
            <div className="mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-hospital-blue text-center mb-8">
                Our Procedures Include
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {procedures.map((procedure, index) => (
                  <div key={index} className="group flex items-center bg-hospital-blue/5 hover:bg-hospital-blue/10 p-4 rounded-xl transition-all duration-300 hover:scale-105">
                    <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-hospital-green group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium group-hover:text-hospital-blue transition-colors duration-300">
                      {procedure}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Success Rate Highlight - Only for Piles */}
          {proctologyInfo && (
            <div className="bg-gradient-to-r from-hospital-blue/10 via-hospital-green/10 to-hospital-blue/10 rounded-2xl p-8 mb-12 text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-hospital-green rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-4xl font-bold text-hospital-blue">99%</div>
                  <div className="text-gray-600 font-medium">Success Rate</div>
                </div>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our advanced laser treatment delivers exceptional results with minimal recurrence and maximum patient satisfaction
              </p>
            </div>
          )}


        </div>
      </section>

      {/* Why Choose Us Section */}
      {whyChooseUs && whyChooseUs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-hospital-teal/10 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5 mr-2 text-hospital-teal" />
                <span className="text-sm font-semibold text-hospital-teal">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-hospital-blue mb-6">
                Why Choose Shri Sigma
                <span className="block text-hospital-teal">Hospitals?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence and patient-centered care sets us apart in healthcare
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs?.map((reason, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-large hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                    <div className="flex items-start">
                      <div className="mr-6 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-hospital-blue group-hover:bg-hospital-teal group-hover:scale-110 transition-all duration-300">
                        <CheckCircle className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                          {reason}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="mt-6 flex justify-start ml-20">
                      <div className="w-8 h-1 bg-gradient-to-r from-hospital-blue to-hospital-teal rounded-full opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Treatment Steps Section */}
      {treatmentSteps && (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-hospital-blue mb-4">
                How is Laser Treatment for Piles Performed at<br />
                Shri Sigma Hospitals?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                In just 3 simple stages, you can get relief from piles at Shri Sigma Hospitals with advanced laser treatment.
              </p>
            </div>

            <div className="space-y-16">
              {treatmentSteps.map((step, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="inline-flex items-center bg-hospital-blue/10 rounded-full px-4 py-2 mb-4">
                      <span className="text-sm font-semibold text-hospital-blue">{step.step}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-hospital-blue mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl shadow-large">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Patient Testimonials Section */}
      {testimonials && (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-hospital-blue mb-4">
                What Our Patients Are <span className="text-hospital-blue">Saying</span>
              </h2>
              <h4 className="text-xl text-gray-600 mb-6">
                Over <span className="text-hospital-teal font-bold">35+ years</span> of experience<br />
                <span className="text-hospital-teal font-bold">50,000+</span> of happy patients
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-large hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-medium flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-hospital-blue mb-2">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {testimonial.review}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-hospital-blue mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600">
                  Answers to your most common questions about our hospital.
                </p>
              </div>

              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Doctors Section */}
      {doctors && doctors.length > 0 && (
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-hospital-yellow/10 rounded-full px-4 py-2 mb-6">
                <Award className="w-5 h-5 mr-2 text-hospital-yellow" />
                <span className="text-sm font-semibold text-hospital-yellow">Expert Team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-hospital-blue mb-6">
                Our Expert
                <span className="block text-hospital-yellow">Doctors</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet our experienced specialists who provide world-class {title.toLowerCase()} care with proven expertise
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {doctors?.map((doctor, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-3xl shadow-large hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
                    <div className="relative h-80">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="mb-3 text-2xl font-bold font-display text-hospital-blue group-hover:text-hospital-green transition-colors duration-300">
                        {doctor.name}
                      </h3>
                      <p className="mb-3 text-hospital-green font-semibold">
                        {doctor.qualification}
                      </p>
                      {doctor.specialization && (
                        <p className="mb-3 text-gray-600 font-medium">
                          {doctor.specialization}
                        </p>
                      )}
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Experience: {doctor.experience}</span>
                      </div>

                      {/* Decorative Element */}
                      <div className="mt-6 flex justify-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-hospital-blue to-hospital-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modern CTA Section */}
      <section className="relative bg-gradient-to-br from-hospital-blue via-hospital-blue-dark to-hospital-green py-20 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Phone className="w-5 h-5 mr-2 text-hospital-yellow" />
              <span className="text-sm font-semibold">Get Started Today</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 leading-tight">
              Ready to Get the Best
              <span className="block text-hospital-yellow">{title} Treatment?</span>
            </h2>

            <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Contact us today to schedule your consultation with our expert specialists.
              Your health is our priority.
            </p>

            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              <Link
                href="tel:+918977763308"
                className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm px-10 py-5 text-hospital-blue font-bold rounded-2xl transition-all duration-300 hover:bg-white hover:scale-105 shadow-2xl"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:animate-bounce-gentle" />
                Call: +91 89777 63308
              </Link>
              <button
                onClick={() => {
                  // Send via secure API route
                  fetch('/api/whatsapp', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      message: `I want to know more about ${title} treatment at Shri Sigma Hospitals.`,
                    }),
                  }).catch(() => {});
                  // Always open WhatsApp for user experience
                  const message = `I want to know more about ${title} treatment at Shri Sigma Hospitals.`;
                  openWhatsAppWithMessage('918977763302', message);
                }}
                className="group inline-flex items-center justify-center border-2 border-white/80 backdrop-blur-sm px-10 py-5 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white hover:text-hospital-blue shadow-2xl"
              >
                WhatsApp Us
                <svg className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-16">
              <div className="text-center">
                <div className="text-2xl font-bold font-display text-hospital-yellow mb-1">24/7</div>
                <div className="text-sm opacity-90">Emergency Care</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-display text-hospital-yellow mb-1">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-display text-hospital-yellow mb-1">25+</div>
                <div className="text-sm opacity-90">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-display text-hospital-yellow mb-1">NABH</div>
                <div className="text-sm opacity-90">Accredited</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialtyPageTemplate;