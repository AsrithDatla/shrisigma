'use client';

import Image from 'next/image';
import { Shield, CheckCircle } from 'lucide-react';

const InsuranceSlider = () => {
  const insurancePartners = [
    { name: 'FHPL', logo: '/images/Cards/FHPL.png' },
    { name: 'Health India TPA', logo: '/images/Cards/Health India TPA.png' },
    { name: 'Manipal Cigna', logo: '/images/Cards/Manipal Cigna.png' },
    { name: 'Medi Assist', logo: '/images/Cards/Medi Assist.png' },
    { name: 'National Insurance', logo: '/images/Cards/National Insurance.png' },
    { name: 'NIA', logo: '/images/Cards/NIA.png' },
    { name: 'Oriental Insurance', logo: '/images/Cards/Oriental Insurance.png' },
    { name: 'Tata AIG', logo: '/images/Cards/Tata_AIG.png' },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-hospital-gray-50 via-white to-hospital-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Enhanced Header */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-hospital-green/10 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-hospital-green rounded-full mr-2"></div>
              <span className="text-xs sm:text-sm font-semibold text-hospital-green">Insurance Partners</span>
            </div>
            <div className="mb-4 sm:mb-6 flex justify-center">
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-hospital-blue to-hospital-blue-dark shadow-large">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
            </div>
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-hospital-gray-900">
              Insurance & Cashless Facility
            </h2>
            <p className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl text-hospital-gray-600 leading-relaxed px-4">
              We accept all major insurance providers and offer seamless cashless treatment 
              for your convenience and peace of mind
            </p>
          </div>

          {/* Enhanced Benefits */}
          <div className="mb-8 sm:mb-12 lg:mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft border border-hospital-gray-100 hover:shadow-medium transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-hospital-green/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-hospital-green/20 transition-colors duration-300">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-hospital-green" />
                </div>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-hospital-gray-900 text-center mb-1 sm:mb-2">Cashless Treatment</h3>
              <p className="text-xs sm:text-sm text-hospital-gray-600 text-center">No upfront payments required</p>
            </div>
            <div className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft border border-hospital-gray-100 hover:shadow-medium transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-hospital-blue/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-hospital-blue/20 transition-colors duration-300">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-hospital-blue" />
                </div>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-hospital-gray-900 text-center mb-1 sm:mb-2">Quick Approvals</h3>
              <p className="text-xs sm:text-sm text-hospital-gray-600 text-center">Fast processing and approvals</p>
            </div>
            <div className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft border border-hospital-gray-100 hover:shadow-medium transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-hospital-yellow/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-hospital-yellow/20 transition-colors duration-300">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-hospital-yellow" />
                </div>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-hospital-gray-900 text-center mb-1 sm:mb-2">All Major Insurances</h3>
              <p className="text-xs sm:text-sm text-hospital-gray-600 text-center">Wide network of insurance partners</p>
            </div>
          </div>
          
          {/* Enhanced Desktop Slider */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 lg:p-8 shadow-large border border-hospital-gray-100">
            <div className="hidden md:block">
              <div className="flex animate-scroll space-x-8 lg:space-x-12">
                {/* Duplicate the array for seamless loop */}
                {[...insurancePartners, ...insurancePartners].map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0"
                  >
                    <div className="group flex h-20 w-40 lg:h-24 lg:w-48 items-center justify-center rounded-lg lg:rounded-xl border-2 border-hospital-gray-100 bg-white p-4 lg:p-6 transition-all duration-300 hover:border-hospital-blue/30 hover:shadow-medium hover:scale-105">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} Insurance`}
                        width={160}
                        height={80}
                        className="max-h-12 lg:max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Mobile Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:hidden">
              {insurancePartners.slice(0, 6).map((partner, index) => (
                <div
                  key={index}
                  className="group flex h-16 sm:h-20 items-center justify-center rounded-lg sm:rounded-xl border-2 border-hospital-gray-100 bg-white p-2 sm:p-4 hover:border-hospital-blue/30 hover:shadow-medium transition-all duration-300"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Insurance`}
                    width={120}
                    height={60}
                    className="max-h-8 sm:max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 640px) 120px, 120px"
                  />
                </div>
              ))}
            </div>

            {/* Enhanced View All Button - Mobile */}
            <div className="mt-6 sm:mt-8 md:hidden">
              <button className="inline-flex items-center text-sm sm:text-base text-hospital-blue hover:text-hospital-green font-semibold transition-colors duration-200 group">
                View All Insurance Partners
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <div className="bg-gradient-to-r from-hospital-blue/5 to-hospital-green/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-hospital-gray-100">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-display text-hospital-gray-900 mb-3 sm:mb-4">
                Need Help with Insurance?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-hospital-gray-600 mb-6 sm:mb-8 px-4">
                Our insurance desk team is here to assist you with verification and claims
              </p>
              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center">
                <a
                  href="tel:+918977763308"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-hospital-blue to-hospital-blue-dark px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-105"
                >
                  <svg className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Insurance Desk
                </a>
                <a
                  href="/contact-us-madhapur-hyderabad"
                  className="inline-flex items-center justify-center border-2 border-hospital-blue px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-hospital-blue rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-hospital-blue hover:text-white hover:scale-105"
                >
                  Get Help Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSlider;