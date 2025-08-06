'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '75+', label: 'Bedded Hospital', icon: '🏥' },
    { number: '25+', label: 'Expert Doctors', icon: '👨‍⚕️' },
    { number: '50000+', label: 'Happy Patients', icon: '😊' },
    { number: '20+', label: 'Insurance Partners', icon: '🛡️' },
  ];

  const features = [
    { title: 'Advanced Technology', description: 'State-of-the-art medical equipment and facilities' },
    { title: 'Expert Team', description: 'Highly qualified and experienced medical professionals' },
    { title: '24/7 Emergency', description: 'Round-the-clock emergency care and support' },
    { title: 'Personalized Care', description: 'Tailored treatment plans for every patient' },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-hospital-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center bg-hospital-blue/10 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-hospital-blue rounded-full mr-2"></div>
                <span className="text-xs sm:text-sm font-semibold text-hospital-blue">About Our Hospital</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-hospital-gray-900 mb-4 sm:mb-6 leading-tight">
                Leading Healthcare Excellence in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hospital-green to-hospital-green-dark">Madhapur</span>
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-hospital-gray-600 leading-relaxed mb-4 sm:mb-6">
              Shri Sigma Hospitals is a premier multispecialty healthcare facility 
              located in the heart of Madhapur, Hyderabad. We are committed to 
              providing world-class medical care with state-of-the-art technology 
              and experienced specialists.
            </p>
            
            <p className="text-sm sm:text-base text-hospital-gray-600 leading-relaxed mb-6 sm:mb-8">
              Our comprehensive range of medical services includes advanced treatments 
              in cardiology, orthopedics, gynecology, neuroscience, and many other 
              specialties. We pride ourselves on delivering personalized care with 
              compassion and excellence.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white shadow-soft border border-hospital-gray-100 hover:shadow-medium transition-all duration-300 hover:scale-105">
                    <div className="w-2 h-2 bg-hospital-green rounded-full mt-1.5 sm:mt-2 group-hover:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-hospital-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-xs sm:text-sm text-hospital-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mb-6 sm:mb-8 grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-hospital-blue to-hospital-green mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-hospital-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
              <Link
                href="/about-hospital-madhapur-hyderabad"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-hospital-blue to-hospital-blue-dark px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-glow hover:scale-105"
              >
                Learn More About Us
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/best-doctors-madhapur-hyderabad"
                className="inline-flex items-center justify-center border-2 border-hospital-blue px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-hospital-blue font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-hospital-blue hover:text-white hover:scale-105"
              >
                Meet Our Doctors
              </Link>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative order-first lg:order-last">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl sm:rounded-2xl shadow-large">
              <Image
                src="/images/unnamed.webp"
                alt="Shri Sigma Hospitals - Modern Healthcare Facility"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Enhanced Floating Cards - Hidden on small mobile */}
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-large border border-white/20 hidden xs:block">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-hospital-green to-hospital-green-dark">
                  <Award className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold font-display text-hospital-blue">24/7</div>
                  <div className="text-xs sm:text-sm font-medium text-hospital-gray-600">Emergency Care</div>
                </div>
              </div>
            </div>

            {/* Additional Floating Element - Hidden on small mobile */}
            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 bg-gradient-to-r from-hospital-blue to-hospital-blue-dark p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-large hidden xs:block">
              <div className="text-center text-white">
                <div className="text-base sm:text-xl font-bold font-display">ISO</div>
                <div className="text-xs font-medium opacity-90">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;