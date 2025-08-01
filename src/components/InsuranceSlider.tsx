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
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-hospital-blue/10">
                <Shield className="h-8 w-8 text-hospital-blue" />
              </div>
            </div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
              Insurance & Cashless Facility
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 md:text-lg">
              We accept all major insurance providers and offer cashless treatment 
              for your convenience
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:mb-12 md:grid-cols-3">
            <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
              <CheckCircle className="mr-3 h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-700">Cashless Treatment</span>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
              <CheckCircle className="mr-3 h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-700">Quick Approvals</span>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
              <CheckCircle className="mr-3 h-5 w-5 text-green-600" />
              <span className="font-medium text-gray-700">All Major Insurances</span>
            </div>
          </div>
          
          {/* Desktop Slider */}
          <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-sm">
            <div className="hidden md:block">
              <div className="flex animate-scroll space-x-8">
                {/* Duplicate the array for seamless loop */}
                {[...insurancePartners, ...insurancePartners].map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0"
                  >
                    <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-gray-100 bg-white p-4 transition-transform hover:scale-105">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} Insurance`}
                        width={140}
                        height={70}
                        className="max-h-14 w-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Grid */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {insurancePartners.slice(0, 6).map((partner, index) => (
                <div
                  key={index}
                  className="flex h-16 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 p-3"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Insurance`}
                    width={100}
                    height={50}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* View All Button - Mobile */}
            <div className="mt-6 md:hidden">
              <button className="text-sm font-medium text-hospital-blue hover:text-hospital-blue/80">
                View All Insurance Partners →
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <p className="mb-4 text-gray-600">
              Need help with insurance verification?
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="tel:+918977763308"
                className="inline-flex items-center justify-center rounded-lg bg-hospital-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-hospital-blue/90"
              >
                Call Insurance Desk
              </a>
              <a
                href="/contact-us-madhapur-hyderabad"
                className="inline-flex items-center justify-center rounded-lg border-2 border-hospital-blue px-6 py-3 font-semibold text-hospital-blue transition-colors hover:bg-hospital-blue hover:text-white"
              >
                Get Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSlider;